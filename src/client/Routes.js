import React from "react";
// import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import UsersListPage from "./pages/UsersListPage";

// export default () => {
//   return (
//     <div>
//       <Route exact path="/" component={Home} />
//       <Route exact path ="/users" component={UsersList}/>
//     </div>
//   );
// };

export default [
  {
    path: "/",
    ...HomePage,
    exact: true,
  },
  {
    path: "/users",
    ...UsersListPage
  },
];
