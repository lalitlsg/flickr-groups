import React, { useState } from "react";
import axios from "axios";
import InfiniteScroller from "react-infinite-scroller";
import {
  Groups,
  Form,
  Input,
  Button,
  Cards,
  GroupsWrapper,
  Home,
  ImgEmpty,
  Empty,
  SearchText
} from "../styles/groups";
import { BiSearchAlt2 } from "react-icons/bi";

import empty from "../images/empty.svg";
import GroupCard from "./group-components/GroupCard";
import BarChart from "./group-components/BarChart";
import GroupNames from "./group-components/GroupNames";

let defaultPageNo = 1;

const GroupsContainer = () => {
  const [search, setSearch] = useState("");
  const [groups, setGroups] = useState([]);
  const [pages, setPages] = useState(0);
  const [isEmpty, setIsEmpty] = useState(true);
  const [nameList, setNameList] = useState(true);

  const fetchGroups = pageNumber => {
    let query_params = {
      api_key: process.env.REACT_APP_FLICKR_API_KEY,
      text: search,
      page: pageNumber,
      format: "json",
      nojsoncallback: 1,
      per_page: 15
    };
    axios
      .get(
        "https://www.flickr.com/services/rest/?method=flickr.groups.search&",
        { params: query_params }
      )
      .then(res => {
        let data = res.data.groups.group;
        let groupsArr = data.map(item => ({
          nsid: item.nsid,
          name: item.name,
          iconserver: item.iconserver,
          pool_count: item.pool_count,
          avatar: `https://live.staticflickr.com/${item.iconserver}/buddyicons/${item.nsid}.jpg`
        }));
        if (defaultPageNo > 1) {
          setGroups([...groups, ...groupsArr]);
        } else {
          setGroups(groupsArr);
        }
        setPages(res.data.groups.pages);
      })
      .catch(error => console.log(error));
  };
  const searchText = e => {
    e.preventDefault();
    setIsEmpty(false);
    defaultPageNo = 1;
    fetchGroups(defaultPageNo);
    setNameList(false);
  };

  const setSearchText = value => {
    setSearch(value);
    setNameList(false);
  };

  const setInputText = e => {
    setSearch(e.target.value);
    setNameList(true);
  };

  let cardArr = groups.map(group => (
    <GroupCard key={group.nsid} group={group} />
  ));

  let labels = groups.map(i => i.name);
  let values = groups.map(i => +i.pool_count);
  return (
    <Groups>
      <Form onSubmit={searchText}>
        <Input value={search} onChange={setInputText} />
        <Button>
          <BiSearchAlt2 />
          <SearchText>Search</SearchText>
        </Button>
      </Form>
      {search.length > 0 && nameList ? (
        <GroupNames text={search} setSearch={setSearchText} />
      ) : null}

      {isEmpty ? (
        <Home>
          <ImgEmpty src={empty} />
          <Empty>Seems You Haven't Search Anything Yet!</Empty>
        </Home>
      ) : (
        <InfiniteScroller
          pageStart={0}
          loadMore={() => fetchGroups(++defaultPageNo)}
          hasMore={defaultPageNo < pages ? true : false}
        >
          <GroupsWrapper>
            <Cards>{cardArr}</Cards>
            <BarChart label={labels} values={values} />
          </GroupsWrapper>
        </InfiniteScroller>
      )}
    </Groups>
  );
};

export default React.memo(GroupsContainer);
