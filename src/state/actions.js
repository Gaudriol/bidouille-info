export const fetchIds = () => ({
  type: "FETCH_IDS",
});

export const fetchIdsSuccess = ids => ({
  type: "FETCH_IDS_SUCCESS",
  payload: ids,
});

export const fetchIdsFailure = () => ({
  type: "FETCH_IDS_FAILURE",
});

export const fetchStories = (ids, page) => ({
  type: "FETCH_STORIES",
  payload: { ids, page },
});

export const fetchStoriesSuccess = stories => ({
  type: "FETCH_STORIES_SUCCESS",
  payload: stories,
});

export const fetchStoriesFailure = () => ({
  type: "FETCH_STORIES_FAILURE",
});
