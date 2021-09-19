import React from "react";

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  return <h1>Route not Found</h1>;
};

export default {
  component: NotFoundPage,
};
