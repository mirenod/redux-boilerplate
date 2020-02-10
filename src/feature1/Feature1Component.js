import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { getUsers, resetUsers } from "./actions";

const Feature1Component = ({ getUsers, resetUsers, users }) => {
  const handleOnClick = async () => {
    getUsers();
  };

  return (
    <>
      <div>
        <h3>Feature 1:</h3>
        <button onClick={handleOnClick}>Get Users API 1</button>
        <button
          onClick={() => {
            resetUsers();
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

const mapStateToProps = state => ({
  users: state.feature1.users
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getUsers,
      resetUsers
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Feature1Component);
// https://the-one-api.herokuapp.com/v1/book
