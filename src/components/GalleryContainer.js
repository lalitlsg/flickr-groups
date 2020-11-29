import React, { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";
import InfiniteScroller from "react-infinite-scroller";
import { BiArrowBack } from "react-icons/bi";
import { BsFillPeopleFill } from "react-icons/bs";
import { BsImages } from "react-icons/bs";
import Photo from "./group-components/Photo";
import {
  Gallery,
  GroupInfo,
  GroupTitle,
  GroupDetails,
  Back,
  MyMasonry
} from "../styles/gallery";

let defaultPageNo = 1;

const GalleryContainer = () => {
  const { nsid } = useParams();
  const history = useHistory();
  const [photos, setPhotos] = useState([]);
  const [pages, setPages] = useState(0);
  const [groupinfo, setGroupInfo] = useState({
    name: "",
    desc: "",
    pool_count: "",
    members: ""
  });

  const fetchPhotos = pageNumber => {
    let query_params = {
      api_key: process.env.REACT_APP_FLICKR_API_KEY,
      group_id: nsid,
      page: pageNumber,
      format: "json",
      nojsoncallback: 1,
      per_page: 20
    };
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.groups.pools.getPhotos&",
        { params: query_params }
      )
      .then(res => {
        let data = res.data.photos;
        let photos_arr = res.data.photos.photo;
        let photos_url = photos_arr.map(photo => ({
          secret: photo.secret,
          ownername: photo.ownername,
          title: photo.title,
          url: `https://live.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`
        }));

        setPhotos([...photos, ...photos_url]);
        setPages(data.pages);
      })
      .catch(error => console.log(error));
  };

  const groupInfo = () => {
    let query_params = {
      api_key: process.env.REACT_APP_FLICKR_API_KEY,
      group_id: nsid,
      format: "json",
      nojsoncallback: 1
    };
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.groups.getInfo&",
        { params: query_params }
      )
      .then(res => {
        let data = res.data.group;
        setGroupInfo({
          name: data.name._content,
          desc: data.description._content,
          pool_count: data.pool_count._content,
          members: data.members._content
        });
      })
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchPhotos(defaultPageNo);
    groupInfo();
  }, []);

  console.log(photos);

  const renderPhotos = photos.map(photo => (
    <Photo key={photo.secret} photo={photo} />
  ));

  return (
    <Gallery>
      <Back onClick={() => history.goBack()}>
        <BiArrowBack />
      </Back>
      <GroupInfo>
        <GroupTitle>{groupinfo.name}</GroupTitle>
        <GroupDetails> {groupinfo.desc}</GroupDetails>
        <GroupDetails>
          <BsImages /> {groupinfo.pool_count} | <BsFillPeopleFill />{" "}
          {groupinfo.members}
        </GroupDetails>
      </GroupInfo>
      <InfiniteScroller
        pageStart={0}
        loadMore={() => fetchPhotos(++defaultPageNo)}
        hasMore={defaultPageNo < pages ? true : false}
      >
        <MyMasonry>{renderPhotos}</MyMasonry>
      </InfiniteScroller>
    </Gallery>
  );
};
export default React.memo(GalleryContainer);
