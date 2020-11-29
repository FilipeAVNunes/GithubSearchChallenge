import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import NavBar from "./components/layout/NavBar";
import Footer from "./components/layout/Footer";
import Users from "./components/users/users";
import Search from "./components/users/search";
import Alert from "./components/layout/Alert";
import User from "./components/users/user";
import "./App.css";

class App extends React.Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    user: {},
    repos: [],
  };
  async componentDidMount() {
    this.setState({
      loading: true,
    });
    const res = await axios.get("https://api.github.com/users");
    this.setState({
      users: res.data,
      loading: false,
    });
  }

  searchUsers = async (text) => {
    this.setState({
      loading: true,
    });
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    this.setState({
      users: res.data.items,
      loading: false,
    });
  };

  getUser = async (username) => {
    this.setState({
      loading: true,
    });

    const res = await axios.get(`https://api.github.com/users/${username}`);
    this.setState({
      user: res.data,
      loading: false,
    });
  };

  getUserRepos = async (username) => {
    this.setState({
      loading: true,
    });

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos`
    );
    this.setState({
      repos: res.data,
      loading: false,
    });
  };

  setAlert = (msg, type) => {
    this.setState({
      alert: { msg: msg, type: type },
    });
    setTimeout(() => this.setState({ alert: null }), 3000);
  };
  render() {
    const { loading, users, user, repos } = this.state;
    return (
      <Router>
        <div>
          <NavBar />
          <div>
            <Alert alert={this.state.alert} />
            <Switch>
              <Route
                exact
                path="/"
                render={(props) => (
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                )}
              />
              <Route
                exact
                path="/user/:login"
                render={(props) => (
                  <User
                    {...props}
                    getUser={this.getUser}
                    getUserRepos={this.getUserRepos}
                    user={user}
                    repos={repos}
                    loading={loading}
                  />
                )}
              />
            </Switch>
          </div>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
