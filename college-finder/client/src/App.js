import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import LandingPage from "./views/LandingPage";  <Route exact path="/home" component={LandingPage} />
import LoginPage from "./views/LoginPage/LoginPage";
import ProfilePage from "./views/ProfilePage/ProfilePage"; 

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
    user: null
  };

  componentDidMount() {
    axios.get('/api/user')
      .then(res => {
        this.setState({ user: res.data.id }, () => {
          this.props.history.push('/');
        });
      }).catch(err => {
        console.log('no user');
      });
  }

  setUser = (res) => {
      this.setState({ user: res.data.id }, () => {
        this.props.history.push('/');
      });
  } 

  render() {
    return (
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} setUser={this.setUser} /> } />
        <Route path="/register" component={Register} setUser={this.setUser} />
        <PrivateRoute path="/" exact component={Home} user={this.state.user} />
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
      </Switch>
    </div>
  </Router> 
);
*/

export default App;
