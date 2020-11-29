import styled from "styled-components";

export const Gallery = styled.div``;

export const GroupInfo = styled.div`
  text-align: center;
`;
export const GroupTitle = styled.h2`
  margin: 10px 0;
`;
export const GroupDetails = styled.p`
  margin: 10px 0;
`;

export const Back = styled.span`
  font-size: 30px;
  cursor: pointer;
  padding: 5px 5px 0 5px;
  border-radius: 50px;
  &:hover {
    background-color: #fae9fc;
  }
`;

export const MyMasonry = styled.div`
  column-count: 4;
  column-gap: 10px;
  @media screen and (max-width: 950px) {
    column-count: 3;
  }
  @media screen and (max-width: 700px) {
    column-count: 2;
  }
  @media screen and (max-width: 500px) {
    column-count: 1;
  }
`;
