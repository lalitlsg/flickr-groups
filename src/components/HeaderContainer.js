import React from "react";
import styled from "styled-components";

const Header = styled.header`
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  padding: 10px;
`;

const BrandName = styled.h1``;

const HeaderContainer = () => {
  return (
    <Header>
      <BrandName>Flickr Groups</BrandName>
    </Header>
  );
};

export default HeaderContainer;
