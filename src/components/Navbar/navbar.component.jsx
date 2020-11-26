import React from "react";
import { Link } from "react-router-dom";

import "./navbar.styles.scss";

export default function Navbar() {
  return (
    <div>
      <header>
        <Link to="/">LovelyStay-Github</Link>
      </header>
    </div>
  );
}
