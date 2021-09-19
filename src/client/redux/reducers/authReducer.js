import { UsersTypes } from "../action-types/actions.types";

export default function (state = null, action) {
  switch (action.type) {
    case UsersTypes.FETCH_CURRENT_USER:
      return action.payload || false;
    default:
      return state;
  }
}
