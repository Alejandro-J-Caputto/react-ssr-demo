// const express = require("express");
// const path = require("path");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const { Home } = require("./client/components/Home");
import "regenerator-runtime";
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import express from "express";
import proxy from "express-http-proxy";
import { matchRoutes } from "react-router-config";
import Routes from "./client/Routes";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const app = express();
app.use(
  "/api",
  proxy("http://react-ssr-api.herokuapp.com", {
    proxyReqOptDecorator(opts) {
      opts.headers["x-forwarded-host"] = "localhost:3000";
      return opts;
    },
  })
);
// I cleary define that this folder should be available.
app.use(express.static("public"));
app.get(
  /\.(js|css|map|ico|png)$/,
  express.static(path.resolve(__dirname, "../", "build"))
);
app.get("*", (req, res) => {
  const store = createStore(req);
  //Check if the req.path Matches some of our routes
  // returns the information and the components related to the route
  const promises = matchRoutes(Routes, req.path).map(({ route }) => {
    //We take the information from the component with loadData
    return route.loadData ? route.loadData(store) : null;
  });

  Promise.all(promises).then(() => {
    res.send(renderer(req, store));
  });
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
