import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default () => {
  const auth = useSelector((state) => state.auth);
  const authButton = auth ? (
    <a href="/api/logout">Logout</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <div className="header">
      <Link to="/">REACT SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    </div>
  );
};
