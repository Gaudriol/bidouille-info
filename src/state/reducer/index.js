import { combineReducers } from "redux";
import stories from "./reducers";

export const rootReducer = combineReducers({
  stories,
});

export default rootReducer;
