import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./Components/NavBar/NavBar";
import Auth from "./Pages/Auth/Auth";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <Router>
        <NavBar />
        <main>
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
          <Footer />
        </main>
      </Router>
    </>
  );
};

export default App;
