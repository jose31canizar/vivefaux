import { combineReducers } from "redux";
import posts from "./posts";
import pages from "./pages";
import navigation from "./navigation";
import lightbox from "./lightbox";

export const reducers = combineReducers({
  posts,
  pages,
  navigation,
  lightbox
});

export default reducers;
