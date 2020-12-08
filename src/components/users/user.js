import React, { useEffect } from "react";
import PropTypes from "prop-types";
import Loading from "../layout/Loading";
import { Link } from "react-router-dom";
import Repos from "../repos/Repos";

const User = (props) => {
  const { login, public_repos, avatar_url, html_url } = props.user;
  const { repos, loading } = props;

  useEffect(() => {
    props.getUser(props.match.params.login);
    props.getUserRepos(props.match.params.login);
  }, []);

  User.propTypes = {
    loading: PropTypes.bool.isRequired,
    user: PropTypes.object.isRequired,
    getUser: PropTypes.func.isRequired,
    getUserRepos: PropTypes.func.isRequired,
    repos: PropTypes.array.isRequired,
  };

  if (loading) return <Loading />;
  return (
    <div>
      <div className="back">
        <Link to="/" className="visit">
          Back to Searching
        </Link>
      </div>
      <div className="card">
        <img style={{ width: "300px" }} src={avatar_url} alt="avatar" />
        <strong className="title">{login}</strong>
        <p className="title">Number of public repos: {public_repos}</p>
        <a href={html_url} className="visit">
          Visit Github Profile
        </a>
      </div>
      <h1 className="repolist">Repos</h1>
      <Repos repos={repos} />
    </div>
  );
};

export default User;
