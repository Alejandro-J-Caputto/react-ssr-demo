import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/actions/userActions";
export const loadData = (store) => {
  return store.dispatch(fetchUsers);
};
export const UsersListPage = () => {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers);
  }, []);
  return (
    <div>
      <h1>Results</h1>
      <ul>
        {users.length
          ? users.map((user) => <li key={user.id}>{user.name}</li>)
          : null}
      </ul>
    </div>
  );
};

export default {
  component: UsersListPage,
  loadData
}
