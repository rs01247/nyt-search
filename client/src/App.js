import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import UserHome from "./pages/users/UserHome"
import UserCreate from "./pages/users/UserCreate"
import UserView from "./pages/users/UserView"

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
              <Switch>
                <Route path = "/" exact component = {Home}/>
                <Route path = "/user" exact component = {UserHome}/>
                <Route path = "/user/create" exact component = {UserCreate}/>
                <Route path = "/user/:id" exact component = {UserView}/>
              </Switch>
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
