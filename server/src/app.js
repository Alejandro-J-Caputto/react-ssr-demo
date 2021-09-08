const express = require("express");
const React = require("react");
const renderToString = require("react-dom/server").renderToString;
const { Home } = require("./client/components/Home");
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  const content = renderToString(<Home />);
  res.send(content);
});

app.listen(PORT, () => console.log("Listening on port: " + PORT));
