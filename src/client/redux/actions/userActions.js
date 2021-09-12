import { UsersTypes } from "../action-types/actions.types";

export const fetchUsers = async (dispatch) => {
  const response = await fetch(`https://react-ssr-api.herokuapp.com/users`);
  const data = await response.json();
  dispatch({
    type: UsersTypes.fetchUsers,
    payload: data,
  });
};
