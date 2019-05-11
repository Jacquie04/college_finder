import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./views/LandingPage/LandingPage";  
import LoginPage from "./views/LoginPage/LoginPage";
import ProfilePage from "./views/ProfilePage/ProfilePage"; 
import RegistrationPage from "./views/RegistrationPage/RegistrationPage"; 


const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LoginPage} />
        <Route exact path="/profile/:id" component={ProfilePage} />
        <Route exact path="/home" component={LandingPage} />
        <Route exact path="/signup" component={RegistrationPage} />
      </Switch>
    </div>
  </Router>
);

export default App;
