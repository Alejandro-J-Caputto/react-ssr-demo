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
// I cleary define that this folder should be available.
app.use(express.static("public"));
app.get(
  /\.(js|css|map|ico|png)$/,
  express.static(path.resolve(__dirname, "../", "build"))
);
app.get("/", (req, res) => {
  const content = renderToString(<Home />);

  const htmlMarkUp = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <script defer src="bundle.js"></script>
      <title>SSR</title>
  </head>
  <body>
      <div id="app">${content}</div>
  </body>
  </html>
  `;

  res.send(htmlMarkUp);
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
