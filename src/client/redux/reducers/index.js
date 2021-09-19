import { combineReducers } from "redux";
import authReducer from "./authReducer";

import { userReducer } from "./usersReducer";

export const reducers = combineReducers({
  users: userReducer,
  auth: authReducer
});
