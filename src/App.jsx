import React from "react";

import QRCodeGen from "./Components/QRCodeGen/QRCodeGen";
import Share from "./Components/Share/Share";

const App = () => {
  return (
    <div style={{ marginLeft: "10px" }}>
      <h1>Link Shortner</h1>
      <Share />
    </div>
  );
};

export default App;
