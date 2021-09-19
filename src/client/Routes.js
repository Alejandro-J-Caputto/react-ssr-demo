import React from "react";
import App from "./App";
import AdminsListPage from "./pages/AdminsListPage";
// import { Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
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
    ...App,
    routes: [
      {
        path: "/",
        ...HomePage,
        exact: true,
      },
      {
        path: "/users",
        ...UsersListPage,
      },
      {
        ...AdminsListPage,
        path: "/admins",
      },
      {
        ...NotFoundPage,
      },
    ],
  },
];
