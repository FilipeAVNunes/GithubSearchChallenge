import React from "react";
import Loading from "../layout/Loading";
import UserItem from "./UserItem";
import PropTypes from "prop-types";

import "../../App.css";

const Users = ({ users, loading }) => {
  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="users">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Users;
