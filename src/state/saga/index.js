import { all, fork } from "redux-saga/effects";
import storiesSaga from "./stories";

export default function* rootSaga() {
  yield all([fork(storiesSaga)]);
}
