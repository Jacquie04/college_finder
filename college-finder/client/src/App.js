import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LandingPage from "./views/LandingPage";  <Route exact path="/home" component={LandingPage} />
import LoginPage from "./views/LoginPage/LoginPage";
//import ProfilePage from "./views/ProfilePage"; <Route exact path="/profile/:id" component={ProfilePage} />

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
