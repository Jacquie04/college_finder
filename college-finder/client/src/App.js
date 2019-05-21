import React, { Component } from 'react';
import { Router, Redirect, Route, Switch } from "react-router-dom";
// import LandingPage from "./views/LandingPage";  <Route exact path="/home" component={LandingPage} />
import Login from "./views/LoginPage/LoginPage";
import Register from "./views/ProfilePage/ProfilePage"; 
import Home from "./views/ProfilePage/ProfilePage"; 

import "./App.css";
import axios from "axios";

function PrivateRoute({ user, component: Component, ...rest }) {
  //debugger;
  return (
    <Route {...rest}
      render={props =>
        !!user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              //we dont have users or password so just change this line to what page you are working on. 
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
}

class App extends Component {
  state = {
    user: null
  };

  componentDidMount() {
    axios.get('/api/user')
      .then(res => {console.log(res);
         this.setState({ user: res.data.id }, () => {
           this.props.history.push('/');
         });
      }).catch(err => {
        console.log('no user');
      });
  }

  setUser = (res) => {
    //debugger;
      this.setState({ user: res.data.id }, () => {
        this.props.history.push('/home');
      });
  } 

  render() {
    return (
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} setUser={this.setUser} /> } />
        <Route path="/register" component={Register} setUser={this.setUser} />
        <PrivateRoute path="/home" exact component={Home} user={this.state.user} />
        <Route render={() => <Redirect to="/login" />} />
      
      </Switch>
    );
  }
}

/*
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
*/

export default App;