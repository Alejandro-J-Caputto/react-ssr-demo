import { combineReducers } from "redux";
import adminsReducer from "./adminsReducer";
import authReducer from "./authReducer";

import { userReducer } from "./usersReducer";

export const reducers = combineReducers({
  users: userReducer,
  auth: authReducer,
  admin: adminsReducer,
});
