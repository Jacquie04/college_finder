import React, { Component } from 'react';
import {  Redirect, Route, Switch } from "react-router-dom";
// import LandingPage from "./views/LandingPage";  <Route exact path="/home" component={LandingPage} />
import Login from "./views/LoginPage/LoginPage";
import Register from "./views/RegistrationPage/RegistrationPage"; 
import Home from "./views/LandingPage/LandingPage"; 
import Profile from "./views/ProfilePage/ProfilePage";

import "./App.css";
import axios from "axios";

function PrivateRoute({ user, component: Component, ...rest }) {
  // debugger;
  console.log(user, 'in private route filter')
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
        console.log(res, 'in get user')
        if (res.data && res.data.id) {
          this.setState({ user: res.data.id }, () => {
            console.log('pushing')
            this.props.history.push('/profile');
          });
        }
      }).catch(err => {
        console.log('no user');
      });
  }

  logout = (ev) => {
    ev.preventDefault();
    console.log('are we here?');
    axios.get('/api/logout')
      .then(() => {
        this.setState({
          user: null
        }, () => {
          // debugger;
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
      
      </Switch>      <button onClick={this.logout} style={{zIndex: 9999999}}> Log me out </button>
      </div>
    );
  }
}

export default App;