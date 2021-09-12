// const express = require("express");
// const path = require("path");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const { Home } = require("./client/components/Home");
import 'regenerator-runtime';
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import express from "express";
import renderer from "./helpers/renderer";
import createStore from "./helpers/createStore";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const app = express();
// I cleary define that this folder should be available.
app.use(express.static("public"));
app.get(
  /\.(js|css|map|ico|png)$/,
  express.static(path.resolve(__dirname, "../", "build"))
);
app.get("*", (req, res) => {
  const store = createStore();
  //some logic to initialize
  //and load data into the store
  res.send(renderer(req, store));
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
