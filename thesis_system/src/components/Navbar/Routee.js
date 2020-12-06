import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



import Nav from "./Nav";
import Home from "../Home";
import Profile from "../Student_profile"
import Register from "../register/Form"
import StudentList from "../studentlist/studentlist"
import Search from "../search/search"
import Result from "../resultlist/resultlist"
import Admin from "../admin/admin"

import "./styles/Router.css";

export class Routee extends Component {
  render() {
    return (
      <Router className="Router">
        <Nav />
        <Switch className="component">
          <Route path="/" exact component={Home} />
          <Route path="/student" exact component={Register} />
          <Route path="/Search" exact component={Search} />
          <Route path="/studentlist" exact component={StudentList} />
          <Route path="/studentdetails" exact component={Profile} />
          <Route path="/resultlist" exact component={Result} />
          <Route path="/admin" exact component={Admin} />
        </Switch>
      </Router>
    );
  }
}

export default Routee;
