import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Home from "../Home";
import Profile from "../Student_profile"
import Register from "../register/Form"
import "./styles/Router.css";

export class Routee extends Component {
  render() {
    return (
      <Router className="Router">
        <Nav />
        <Switch className="component">
          <Route path="/" exact component={Home} />
          <Route path="/student" exact component={Register} />
          <Route path="/Search" exact component={Home} />
          <Route path="/studentlist" exact component={Home} />
          <Route path="/studentdetails" exact component={Home} />
          <Route path="/resultlist" exact component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default Routee;
