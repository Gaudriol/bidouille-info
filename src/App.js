import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { List } from "./components/List";

import { Wrapper, Title } from "./components";
import { fetchIds, fetchStories } from "state/actions";
import { getIds, getStories } from "state/selectors";

function App() {
  const dispatch = useDispatch();

  const ids = useSelector(getIds);
  const stories = useSelector(getStories);

  useEffect(() => {
    dispatch(fetchIds());
  }, [dispatch]);

  useEffect(() => {
    if (ids) {
      dispatch(fetchStories(ids, 1));
    }
  }, [ids, dispatch]);

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
