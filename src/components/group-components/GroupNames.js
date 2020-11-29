import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

const Names = styled.div`
  background-color: #fae9fc;
  width: 90%;
  margin: 10px 0 0 2%;
  padding: 10px;
  border-radius: 5px;
  position: absolute;
  z-index: 1;
`;

const List = styled.ul`
  list-style-type: none;
`;
const ListItem = styled.li`
  padding: 5px;
  &:hover {
    background-color: #efbcf6;
  }
`;

const GroupNames = ({ text, setSearch }) => {
  const [names, setNames] = useState([]);

  useEffect(() => {
    let source = axios.CancelToken.source();

    let query_params = {
      api_key: process.env.REACT_APP_FLICKR_API_KEY,
      text: text,
      page: 1,
      format: "json",
      nojsoncallback: 1,
      per_page: 10
    };
    try {
      axios
        .get(
          "https://www.flickr.com/services/rest/?method=flickr.groups.search&",
          { params: query_params },
          { cancelToken: source.token }
        )
        .then(res => {
          let data = res.data.groups.group;
          let namesArr = data.map(item => item.name);
          setNames(namesArr);
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      if (axios.isCancel) {
        console.log("axios cancel http request");
      } else {
        console.log(error);
      }
    }

    return () => source.cancel();
  }, [text]);

  let showNames = names.map((item, index) => (
    <ListItem key={index} onClick={() => setSearch(item)}>
      {item}
    </ListItem>
  ));

  return (
    <Names>
      <List>{showNames}</List>
    </Names>
  );
};

export default React.memo(GroupNames);
