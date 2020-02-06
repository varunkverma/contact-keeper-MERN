import React, { Fragment } from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/layout/navbar.component";
import Home from "./components/pages/home.component";
import About from "./components/pages/about.component";
const App = () => (
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
);

export default App;
