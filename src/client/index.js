//Startup point for the client side application
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "../sass/index.scss";
import Routes from "./Routes";

const appHookHTML = document.getElementById("app");
ReactDOM.hydrate(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>,
  appHookHTML
);
