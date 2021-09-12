//Startup point for the client side application
import 'regenerator-runtime';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import { Provider } from "react-redux";
import "../sass/index.scss";
import { reducers } from "./redux/reducers/index";
import Routes from "./Routes";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducers, {}, applyMiddleware(thunk));

const appHookHTML = document.getElementById("app");
ReactDOM.hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </Provider>,
  appHookHTML
);
