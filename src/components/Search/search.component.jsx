import React, { useState, useEffect } from "react";

function Search() {
  const [name, setName] = useState("");
  const [userName, setUsername] = useState("");
  const [repos, setRepos] = useState("");
  const [avatar, setAvatar] = useState("");
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    fetch("https://api.github.com/users/example")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);

  const setData = ({ name, login, public_repos, avatar_url }) => {
    setName(name);
    setUsername(login);
    setRepos(public_repos);
    setAvatar(avatar_url);
  };

  const handleSearch = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = () => {
    fetch(`https://api.github.com/users/${userInput}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  };

  return (
    <div className="search">
      <form onChange={handleSubmit}>
        <input
          name="name"
          placeholder="Search Github account"
          onChange={handleSearch}
        />
        <button type="submit">Search</button>
      </form>
      <div>
        <img src={avatar} alt="avatar" />
        <h1>{name}</h1>
        <h3>{userName}</h3>
        <h3>{repos} Repos</h3>
      </div>
    </div>
  );
}

export default Search;
