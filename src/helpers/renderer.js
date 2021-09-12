import React from "react";
import { renderToString } from "react-dom/server";
import Home from "../client/components/Home";

export default () => {
  const content = renderToString(<Home />);
  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="main.css" rel="stylesheet"/>
      <script defer src="bundle.js"></script>
      <title>SSR</title>
  </head>
  <body>
      <div id="app">${content}</div>
  </body>
  </html>
  `;
};
