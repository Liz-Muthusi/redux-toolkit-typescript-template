import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../Hook";
import { fetchUsers } from "./UserSlice";

const UserView = () => {
  const { users, loading, error } = useAppSelector((state) => state.users);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
  }, [])
  return (
    <div>
      <h1>List of users</h1>
      {loading && <div>Loading...</div>}
      {!loading && error?<div>Error: {error}</div>:null}

      {!loading && users.length? users.map(user=><div key={user.id}>
        {user.name}
      </div>):null}
    </div>
  );
};

export default UserView;
