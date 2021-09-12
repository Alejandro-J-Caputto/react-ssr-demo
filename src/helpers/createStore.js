import { createStore, applyMiddleware } from "redux";
import { reducers } from "../client/redux/reducers";
import thunk from "redux-thunk";

export default () => {
  const store = createStore(reducers, {}, applyMiddleware(thunk));
  return store;
};
