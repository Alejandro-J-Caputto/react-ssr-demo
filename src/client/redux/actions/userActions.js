import { UsersTypes } from "../action-types/actions.types";
import fetch from 'node-fetch';
export const fetchUsers = async (dispatch) => {
  const response = await fetch(`https://react-ssr-api.herokuapp.com/users`);
  const data = await response.json();
  return (dispatch({
    type: UsersTypes.fetchUsers,
    payload: data,
  }));
};
