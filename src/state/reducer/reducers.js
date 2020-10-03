const initalState = {
  ids: [],
  stories: [],
  isFetching: false,
  page: 0,
};

export function stories(state = initalState, action) {
  switch (action.type) {
    case "FETCH_IDS":
    case "FETCH_IDS":
      return { ...state, isFetching: true };
    case "FETCH_IDS_SUCCESS": {
      const ids = action.payload;
      return { ...state, ids, isFetching: false };
    }
    case "FETCH_STORIES_SUCCESS": {
      const { payload: stories } = action;
      return {
        ...state,
        stories: [...state.stories, ...stories],
        page: ++state.page,
        isFetching: false,
      };
    }
    default:
      return state;
  }
}

export default stories;
