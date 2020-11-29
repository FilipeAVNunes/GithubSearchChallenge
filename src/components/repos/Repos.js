import React from "react";
import RepoSingle from "./RepoSingle";
import PropTypes from "prop-types";

const Repos = ({ repos }) => {
  return repos.map((repo) => <RepoSingle repo={repo} key={repo.id} />);
};

Repos.propTypes = {
  repos: PropTypes.array.isRequired,
};

export default Repos;
