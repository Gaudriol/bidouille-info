import React from "react";
import { useDispatch } from "react-redux";
import { List } from "./components/List";

import { Wrapper, Title } from "./components";

function App() {
  const dispatch = useDispatch();

  return (
    <>
      <Wrapper>
        <Title>Bidouille info</Title>
        <List />
      </Wrapper>
    </>
  );
}

export default App;
