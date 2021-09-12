import { combineReducers } from "redux";

import { userReducer } from "./usersReducer";

export const reducers = combineReducers({
  users: userReducer,
});
