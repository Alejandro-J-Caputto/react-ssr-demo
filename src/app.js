// const express = require("express");
// const path = require("path");
// const React = require("react");
// const renderToString = require("react-dom/server").renderToString;
// const { Home } = require("./client/components/Home");
import { fileURLToPath } from "url";
import path, { dirname } from "path";
import React from "react";
import express from "express";
import { renderToString } from "react-dom/server";
import Home from "./client/components/Home";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const PORT = 3000;
const app = express();

app.get(
  /\.(js|css|map|ico|png)$/,
  express.static(path.resolve(__dirname, "../", "build"))
);
app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
