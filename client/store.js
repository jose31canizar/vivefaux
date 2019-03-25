import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducers from "./reducers";
import { composeWithDevTools } from "redux-devtools-extension";

const middleware = [thunk];

export function initializeStore(initialState = {}) {
  return createStore(
    reducers,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
  );
}
