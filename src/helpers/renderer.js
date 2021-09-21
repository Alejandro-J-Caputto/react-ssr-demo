import React from "react";
import { Helmet } from "react-helmet";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { renderRoutes } from "react-router-config";
import serialize from "serialize-javascript";
import Routes from "../client/Routes";
import { Provider } from "react-redux";

export default (req, store, context) => {
  const content = renderToString(
    <Provider store={store}>
      <StaticRouter location={req.url} context={context}>
        {/* <Routes /> */}
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  const helmet = Helmet.renderStatic();

  return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      ${helmet.title.toString()}
      ${helmet.meta.toString()}
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="main.css" rel="stylesheet"/>
      <script defer src="bundle.js"></script>
      <title>SSR</title>
  </head>
  <body>
      <div id="app">${content}</div>
      <script defer>window.INITIAL_STATE=${serialize(store.getState())}</script>

  </body>
  </html>
  `;
};
