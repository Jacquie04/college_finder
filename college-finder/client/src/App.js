import React, { Component } from 'react';
import { BrowserRouter as BrowserRouter, Router, Redirect, Route, Switch } from "react-router-dom";
// import LandingPage from "./views/LandingPage";  <Route exact path="/home" component={LandingPage} />
import Login from "./views/LoginPage/LoginPage";
import Register from "./views/ProfilePage/ProfilePage"; 
import Home from "./views/ProfilePage/ProfilePage"; 

import "./App.css";
//import axios from "axios";

<<<<<<< HEAD
// function PrivateRoute({ user, component: Component, ...rest }) {
//   return (
//     <Route {...rest}
//       render={props =>
//         !!user ? (
//           <Component {...props} />
//         ) : (
//           <Redirect
//             to={{
//               pathname: "/login",
//               state: { from: props.location } 
//             }}
//           />
//         )
//       }
//     />
//   );
// }
=======
function PrivateRoute({ user, component: Component, ...rest }) {
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
>>>>>>> 749d05ec525f9dcd1d32d8f876b116e234ca66ac

// class App extends Component {
//   state = {
//     user: null
//   };

<<<<<<< HEAD
//   componentDidMount() {
//     axios.get('/api/user')
//       .then(res => {
//         this.setState({ user: res.data.id }, () => {
//           this.props.history.push('/');
//         });
//       }).catch(err => {
//         console.log('no user');
//       });
//   }
=======
  componentDidMount() {
    axios.get('/api/user')
      .then(res => {console.log(res);
        // this.setState({ user: res.data.id }, () => {
        //   this.props.history.push('/');
        // });
      }).catch(err => {
        console.log('no user');
      });
  }
>>>>>>> 749d05ec525f9dcd1d32d8f876b116e234ca66ac

//   setUser = (res) => {
//       this.setState({ user: res.data.id }, () => {
//         this.props.history.push('/');
//       });
//   } 

//   render() {
//     return (
//       <Switch>
//         <Route path="/login" render={(props) => <Login {...props} setUser={this.setUser} /> } />
//         <Route path="/register" component={Register} setUser={this.setUser} />
//         <PrivateRoute path="/" exact component={Home} user={this.state.user} />
//         <Route render={() => <Redirect to="/login" />} />
//       </Switch>
//     );
//   }
// }

<<<<<<< HEAD
=======
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route path="/login" render={(props) => <Login {...props} setUser={this.setUser} /> } />
        <Route path="/register" component={Register} setUser={this.setUser} />
        <PrivateRoute path="/" exact component={Home} user={this.state.user} />
        <Route render={() => <Redirect to="/login" />} />
      </Switch>
      </BrowserRouter>
    );
  }
}
>>>>>>> 749d05ec525f9dcd1d32d8f876b116e234ca66ac

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