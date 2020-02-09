import React from "react";
import "./App.css";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import PrivateRoute from "./components/routing/PrivateRoute.component";
import ContactState from "./context/contact/ContactState";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";
import Navbar from "./components/layout/navbar.component";
import Alerts from "./components/layout/alerts.component";
import Home from "./components/pages/home.component";
import About from "./components/pages/about.component";
import Register from "./components/auth/register/register.component";
import Login from "./components/auth/login/login.component";
import setAuthToken from "./utils/setAuthToken";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => (
  <AuthState>
    <ContactState>
      <AlertState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alerts />
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
              </Switch>
            </div>
          </div>
        </Router>
      </AlertState>
    </ContactState>
  </AuthState>
);

export default App;
