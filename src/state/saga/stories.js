import { put, takeLeading } from "redux-saga/effects";
import hackerNewsApi from "services/hackerNewsApi";
import {
  fetchIdsFailure,
  fetchIdsSuccess,
  fetchStoriesFailure,
  fetchStoriesSuccess,
} from "state/actions";

function* fetchIds() {
  try {
    const ids = yield hackerNewsApi.getTopStoriesIds();
    yield put(fetchIdsSuccess(ids));
  } catch (e) {
    console.log(e);
    yield put(fetchIdsFailure());
  }
}

function* fetchStories({ payload }) {
  try {
    const { ids, page } = payload;
    const stories = yield hackerNewsApi.getStoriesByPage(ids, page);
    yield put(fetchStoriesSuccess(stories));
  } catch (e) {
    console.log(e);
    yield put(fetchStoriesFailure());
  }
}

function* hackerNewsSaga() {
  yield takeLeading("FETCH_IDS", fetchIds);
  yield takeLeading("FETCH_STORIES", fetchStories);
}

export default hackerNewsSaga;
