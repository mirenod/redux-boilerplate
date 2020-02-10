import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUsers, resetUsers } from "./actions";

const Feature1Component = () => {
  const users = useSelector(state => state.feature1.users);
  const dispatch = useDispatch();

  return (
    <>
      <div>
        <h3>Feature 1:</h3>
        <button onClick={() => dispatch(getUsers())}>Get Users API 1</button>
        <button
          onClick={() => {
            dispatch(resetUsers());
          }}
        >
          Reset Users
        </button>
        {users.map(user => (
          <div key={user.name}>{user.name}</div>
        ))}
      </div>
    </>
  );
};

export default Feature1Component;
