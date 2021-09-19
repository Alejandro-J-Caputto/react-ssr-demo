import React from "react";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

const CheckAuth = ({ children }) => {
  const auth = useSelector((state) => state.auth);
    
  switch (auth) {
    case false:
      return <Redirect to="/" />;
    case null:
      return <div>Loading</div>;
    default:
      return <div>{children}</div>;
  }
};

export default CheckAuth;
