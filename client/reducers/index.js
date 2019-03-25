import { combineReducers } from "redux";
import posts from "./posts";
import pages from "./pages";

export const reducers = combineReducers({
  posts,
  pages
});

export default reducers;
