const initalState = {
  test: 0,
};

function reducer(state = initalState, action) {
  console.log(action, state)
  switch (action.type) {
    case "TEST_ACTION": {
      console.log(state.test)
      return { ...state, test: ++state.test };
    }
    default:
      return state
  }

}

export default reducer;
