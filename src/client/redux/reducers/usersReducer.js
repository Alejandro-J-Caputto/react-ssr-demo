import { UsersTypes } from "../action-types/actions.types";

export const userReducer = (state = [], action) => {
  switch (action.type) {
    case UsersTypes.fetchUsers:
      return action.payload.data;
    default:
      return state;
  }
};
