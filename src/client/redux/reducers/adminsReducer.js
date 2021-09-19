import { UsersTypes } from "../action-types/actions.types";

export default function (state = [], action) {
  switch (action.type) {
    case UsersTypes.FETCH_ADMINS:
      return action.payload;
    default:
      return state;
  }
}
