import React from "react";
import loadingIcon from "./spinner.gif";
function Loading() {
  return (
    <div>
      <img
        src={loadingIcon}
        alt="loading icon"
        style={{ width: "150px", margin: "auto", display: "block" }}
      />
    </div>
  );
}

export default Loading;
