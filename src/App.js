import React from "react";
import { useDispatch, Provider } from "react-redux";

import { GlobalStyles } from "./styles";
import store from "./store";

import { testAction } from "./state/actions";

function App() {
  const dispatch = useDispatch();

  return (
    <div>
      <GlobalStyles />
      <button onClick={() => dispatch(testAction())}>Click</button>
    </div>
  );
}

export default App;
