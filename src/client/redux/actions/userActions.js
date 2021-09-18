import { UsersTypes } from "../action-types/actions.types";
import fetch from 'node-fetch';

export const fetchUsers = async (dispatch, getState, api) => {
  // console.log(api.baseURL);
  const response = await fetch(`${api.baseURL}/users`, {method: api.method, headers: api.headers});
  const data = await response.json();
  return (dispatch({
    type: UsersTypes.fetchUsers,
    payload: data,
  }));
};
