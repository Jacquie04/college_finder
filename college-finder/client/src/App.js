import React, { Component } from 'react';
import {  Redirect, Route, Switch } from "react-router-dom";
import Login from "./views/LoginPage/LoginPage";
import Register from "./views/RegistrationPage/RegistrationPage"; 
import Home from "./views/LandingPage/LandingPage"; 
import Profile from "./views/ProfilePage/ProfilePage";
import "./App.css";
import axios from "axios";

function PrivateRoute({ user, component: Component, ...rest }) {

  return (
    <Route {...rest}
      render={props =>
        !!user ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              
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
    user: window.localStorage.getItem("user")
  };

  componentDidMount() {
    axios.get('/api/user')
      .then(res => {
        if (res.data && res.data.id) {
          this.setState({ user: res.data.id }, () => {
            this.props.history.push('/profile');
          });
        }
      }).catch(err => {
        console.log(err, 'no user');
      });
  }

  logout = (ev) => {
    ev.preventDefault();
    axios.get('/api/logout')
      .then(() => {
        this.setState({
          user: null
        }, () => {
          this.props.history.push('/login');
        }
        );
      });

      window.localStorage.clear();
  }
  setUser = (res) => {
      this.setState({ user: res.data.id }, () => {
        this.props.history.push('/home');
      });

      window.localStorage.setItem("user", res.data.id)
  };

  render() {
    return (
      <div>

      <Switch>
        <Route path="/login" render={(props) => <Login {...props} setUser={this.setUser} /> } />
        <Route path="/signup" render={(props) => <Register {...props} setUser={this.setUser} /> } />
        <PrivateRoute path="/profile" exact component={Profile}  user={this.state.user} />
        <PrivateRoute path="/home" exact component={Home} user={this.state.user} />
        <PrivateRoute path="*" exact component={Home} user={this.state.user} />
        <Route render={() => <Redirect to="/login" />} /> 
      
      </Switch>      
      

      </div>
    );
  }
}

export default App;