import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/index.scss";
import { setTokenHeader } from "../header/api";
import { currentUser } from "../context/cotextApi";
import jwtDecode from "jwt-decode";

import Main from "./Main";
import Login from "../pages/Login";

function App() {
  const [user, setCurrentUser] = useState({
    isAuthenticated: false,
    user: {},
  });

  useEffect(() => {
    if (localStorage.jwtToken) {
      setTokenHeader(localStorage.jwtToken);
      setCurrentUser({
        isAuthenticated: !!Object.keys(jwtDecode(localStorage.jwtToken)).length,
        user: jwtDecode(localStorage.jwtToken),
      });
    }
  }, []);

  return (
    <currentUser.Provider value={{ user, setCurrentUser }}>
      <Router>
        <Switch>
          <Route exact path="/" render={(props) => <Main {...props} />} />
          <Route exact path="/login" render={(props) => <Login {...props} />} />
          <Route render={() => <h1>404: page not found</h1>} />
        </Switch>
      </Router>
    </currentUser.Provider>
  );
}

export default App;

/*
  Router
    Switch
      Route to=/ render --> main {if not logged in redirect to=/admin-login}
      Route to=/admin-login  render --> loginpage {if logged in redirect to=/}
    Switch
  Route
*/
