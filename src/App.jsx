import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Auth from "./Pages/Auth/Auth";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/auth">
          <Auth />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
