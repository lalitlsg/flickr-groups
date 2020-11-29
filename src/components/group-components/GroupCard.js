import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { BsImages } from "react-icons/bs";

const Avatar = styled.div``;
const Image = styled.img`
  width: 60px;
  height: 60px;
  border-radius: 10px;
`;
const Details = styled.div`
  padding-left: 5px;
`;

const Name = styled.p`
  text-align: center;
  padding-top: 10px;
`;
const Images = styled.p`
  text-align: center;
  padding-top: 5px;
  margin-top: 5px;
`;

const CardLink = styled(Link)`
  width: 250px;
  min-height: 100px;
  display: flex;
  align-items: center;
  padding: 10px;
  margin: 5px;
  border-radius: 5px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  text-decoration: none;
  &:hover {
    background-color: #fae9fc;
    transform: translateY(-5px);
  }

  &:link {
    color: black;
  }
  &:visited {
    color: black;
  }
  @media screen and (max-width: 500px) {
    flex-direction: column;
  }
`;

const GroupCard = props => {
  let { avatar, name, pool_count, nsid } = props.group;
  return (
    <CardLink to={`/gallery/${nsid}`}>
      <Avatar>
        <Image src={avatar} />
      </Avatar>
      <Details>
        <Name>{name}</Name>
        <Images>
          <BsImages /> {pool_count}
        </Images>
      </Details>
    </CardLink>
  );
};
export default React.memo(GroupCard);
