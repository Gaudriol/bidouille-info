const initalState = {
  ids: undefined,
  stories: undefined,
};

export function stories(state = initalState, action) {
  switch (action.type) {
    case "FETCH_IDS_SUCCESS": {
      const ids = action.payload;
      return { ...state, ids };
    }
    case "FETCH_STORIES_SUCCESS": {
      const { payload: stories } = action;
      return { ...state, stories };
    }
    default:
      return state;
  }
}

export default stories;
