import React from "react";
import PropTypes from "prop-types";

import "../../App.css";

const RepoSingle = ({ repo }) => {
  return (
    <div>
      <hr />
      <div className="repos">
        <h3>
          <a href={repo.html_url} className="reponame">
            {repo.name}
          </a>
          <div className="repodescription">
            Description: {repo.description}{" "}
          </div>
        </h3>
      </div>
    </div>
  );
};

RepoSingle.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoSingle;