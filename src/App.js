import React from "react";
import { Switch, Route } from "react-router-dom";
import { Wrapper, Section } from "./styles/styles";
import HeaderContainer from "./components/HeaderContainer";
import GroupsContainer from "./components/GroupsContainer";
import GalleryContainer from "./components/GalleryContainer";

function App() {
  return (
    <Wrapper>
      <HeaderContainer />
      <Section>
        <Switch>
          <Route exact path="/" component={GroupsContainer} />
          <Route path="/gallery/:nsid" component={GalleryContainer} />
        </Switch>
      </Section>
    </Wrapper>
  );
}

export default App;
