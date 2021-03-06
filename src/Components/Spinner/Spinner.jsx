import React from "react";

import "./Spinner.css";

const Spinner = () => {
  return (
    <div className="container">
      <div class="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Spinner;
