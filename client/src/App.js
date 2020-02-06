import React, { Fragment } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import ContactState from "./context/contact/ContactState";
import Navbar from "./components/layout/navbar.component";
import Home from "./components/pages/home.component";
import About from "./components/pages/about.component";
const App = () => (
  <ContactState>
    <Router>
      <Fragment className="App">
        <Navbar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
          </Switch>
        </div>
      </Fragment>
    </Router>
  </ContactState>
);

export default App;
