import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckAuth from "../components/highOrderComponents/CheckAuth";
import { fetchAdmins } from "../redux/actions/userActions";

const AdminsListPage = () => {
  const admins = useSelector((state) => state.admin);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAdmins);
  }, []);
  return (
    <div>
      <CheckAuth>
        <h3>Protected list of admins</h3>
        <ul>
          {admins.length
            ? admins.map((admin) => <li key={admin.id}>{admin.name}</li>)
            : null}
        </ul>
      </CheckAuth>
    </div>
  );
};

export default {
  component: AdminsListPage,
  loadData: ({ dispatch }) => dispatch(fetchAdmins),
};
