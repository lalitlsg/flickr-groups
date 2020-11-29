import styled from "styled-components";

export const Groups = styled.div`
  position: relative;
`;

export const Form = styled.form`
  display: flex;
  justify-content: space-evenly;
`;

export const Input = styled.input.attrs(props => ({
  type: "text",
  placeholder: "Search Groups..."
}))`
  width: 90%;
  font-size: 25px;
  border: none;
  background-color: #fae9fc;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  padding: 10px;
  opacity: 0.5;
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button.attrs(props => ({
  type: "submit"
}))`
  margin-left: 10px;
  padding: 5px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
  background-color: white;
  &:hover {
    background-color: #fae9fc;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
`;

export const GroupsWrapper = styled.div`
  display: flex;
  margin-top: 10px;
`;

export const Home = styled.div`
  opacity: 0.5;
  margin-top: 10px;
`;

export const ImgEmpty = styled.img`
  width: 100%;
  height: 60vh;
`;

export const Empty = styled.p`
  margin-top: 30px;
  font-size: 2em;
  text-align: center;
`;

export const SearchText = styled.p``;
