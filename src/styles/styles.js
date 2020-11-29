import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    text-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);
}
`;

export const Wrapper = styled.div`
  min-height: 100vh;
`;

export const Section = styled.section`
  margin: 20px 10px 0 10px;
`;
