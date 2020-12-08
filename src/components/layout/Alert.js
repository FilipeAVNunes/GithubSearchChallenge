import React from "react";
import "../../styles/App.scss";

const Alert = ({ alert }) => {
  return alert !== null && <div className="alert">{alert.msg}</div>;
};

export default Alert;
