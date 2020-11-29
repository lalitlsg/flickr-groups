import React from "react";
import styled from "styled-components";
import { BsFillPersonFill } from "react-icons/bs";

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Owner = styled.div`
  position: absolute;
  top: 10%;
  left: 5%;
  opacity: 0;
  border-radius: 5px;
  padding: 5px;
  background-color: white;
`;

const PhotoWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  break-inside: avoid;
  position: relative;
  &:hover ${Owner} {
    opacity: 1;
  }
`;

const Photo = props => {
  let { url, ownername } = props.photo;
  return (
    <PhotoWrapper>
      <Image src={url} alt="" />
      <Owner>
        <BsFillPersonFill /> {ownername}
      </Owner>
    </PhotoWrapper>
  );
};

export default React.memo(Photo);
