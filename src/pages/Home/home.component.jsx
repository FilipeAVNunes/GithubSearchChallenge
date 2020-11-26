import React, { Component } from "react";

import Navbar from "../../components/Navbar/navbar.component";
import Search from "../../components/Search/search.component";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      searchField: "",
    };
  }
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    return (
      <div>
        <Navbar />
        <Search
          placeholder="Search Github Profile"
          handleChange={this.handleChange}
        />
      </div>
    );
  }
}
