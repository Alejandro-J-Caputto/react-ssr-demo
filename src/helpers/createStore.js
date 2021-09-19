import { createStore, applyMiddleware } from "redux";
import { reducers } from "../client/redux/reducers";
import thunk from "redux-thunk";

export default (req) => {
  const API_SERVER = {
    baseURL: "https://react-ssr-api.herokuapp.com",
    method: "GET",
    headers: {
      cookie: req.get("cookie") || "",
    },
  };
  const store = createStore(
    reducers,
    {},
    applyMiddleware(thunk.withExtraArgument(API_SERVER))
  );
  return store;
};
