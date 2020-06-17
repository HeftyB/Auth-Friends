import React from 'react';
import './App.css';
import { Route, Switch, Link } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import ProtectedRoute from "./custom/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Link to="/Login">Login</Link>
        <Link to="/Home">Home</Link>
        <Switch>
          <Route path={"/Login"} component={Login}>
          </Route>
          <ProtectedRoute exact path={`/Home`} component={Home}>
          </ProtectedRoute>
        </Switch>
      </div>
    </div>
  );
}

export default App;

/* login info
Lambda School
i<3Lambd4
 */