import React, { Component } from "react";
import PropTypes from "prop-types";

import "../../styles/App.scss";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    setAlert: PropTypes.func.isRequired,
  };
  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.text === "") {
      this.props.setAlert("Please search for a user");
    } else {
      this.props.searchUsers(this.state.text);
      this.setState({
        text: "",
      });
    }
  };

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {
    return (
      <div className="searchbar">
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.onChange}
            placeholder="Search Github Users"
            className="searchInput"
          />
          <button
            id="searchBtn"
            type="submit"
            className="searchBtn"
            value="Search"
          >
            Search
          </button>
        </form>
      </div>
    );
  }
}

export default Search;
