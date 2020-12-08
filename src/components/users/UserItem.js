import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "../../styles/App.scss";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <div className="card">
      <img src={avatar_url} alt="avatar" />
      <h3 className="title">{login}</h3>
      <div>
        <Link to={`/user/${login}`} className="visit-smaller">
          Check Profile
        </Link>
      </div>
    </div>
  );
};

UserItem.prototype = {
  user: PropTypes.object.isRequired,
};

export default UserItem;
