import React from "react";
import styled from "styled-components";

const PhotoWrapper = styled.div`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  break-inside: avoid;
`;
const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Photo = props => {
  let { url } = props.photo;
  return (
    <PhotoWrapper>
      <Image src={url} alt="" />
    </PhotoWrapper>
  );
};

export default React.memo(Photo);
