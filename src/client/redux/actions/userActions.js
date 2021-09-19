import { UsersTypes } from "../action-types/actions.types";
import fetch from "node-fetch";

export const fetchUsers = async (dispatch, getState, api) => {
  // console.log(api.baseURL);
  const response = await fetch(`${api.baseURL}/users`, {
    method: api.method,
    headers: api.headers,
  });
  const data = await response.json();
  return dispatch({
    type: UsersTypes.fetchUsers,
    payload: data,
  });
};

export const fetchCurrentUser = async (dispatch, getState, api) => {
  try {
    const response = await fetch(`${api.baseURL}/current_user`, {
      method: api.method,
      headers: api.headers,
    });
    const data = (await response.json()) || null;
    return dispatch({
      type: UsersTypes.FETCH_CURRENT_USER,
      payload: data,
    });
  } catch (error) {
    return dispatch({
      type: UsersTypes.FETCH_CURRENT_USER,
      payload: null,
    })
  }
};
