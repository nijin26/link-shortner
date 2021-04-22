import React, { useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import firebase from "./utils/firebase";

import NavBar from "./Components/NavBar/NavBar";
import Auth from "./Pages/Auth/Auth";
import About from "./Pages/About/About";
import Home from "./Pages/Home/Home";
import Footer from "./Components/Footer/Footer";

import GlobalStyle from "./styles/globalStyle";
import { DarkTheme, LightTheme } from "./styles/Themes";

const App = () => {
  useEffect(() => {
    console.log(process.env.API_KEY);
    firebase.auth().onAuthStateChanged((user) => {
      if (user) return console.log(user);
      else return console.log("Not Signed In");
    });
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <React.Fragment>
        <GlobalStyle />
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
      </React.Fragment>
    </ThemeProvider>
  );
};

export default App;
