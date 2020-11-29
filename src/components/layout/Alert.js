import React from "react";
import "../../App.css";

const Alert = ({ alert }) => {
  return alert !== null && <div className="App alert">{alert.msg}</div>;
};

export default Alert;
