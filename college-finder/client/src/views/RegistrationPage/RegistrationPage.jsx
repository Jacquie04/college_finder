import React from "react";
import axios from "axios";

import withStyles from "@material-ui/core/styles/withStyles";
import Parallax from "../../assets/components/Parallax/Parallax.jsx";
import PropTypes from "prop-types";
import MenuItem from "@material-ui/core/MenuItem";
import TextField from "@material-ui/core/TextField";
import NavigationIcon from "@material-ui/icons/Navigation";
import Fab from "@material-ui/core/Fab";
//import IconButton from '@material-ui/core/IconButton';

//components for login page
import Header from "../../assets/components/Header/Header.jsx";
import Card from "../../assets/components/Card/Card.jsx";
import Button from "../../assets/components/CustomButtons/Button.jsx";
import Paper from '@material-ui/core/Paper';
import CardBody from "../../assets/components/Card/CardBody.jsx";
//import HeaderLinks from "../../assets/components/Header/HeaderLinks.jsx";
import Footer from "../../assets/components/Footer/Footer.jsx";
import GridContainer from "../../assets/components/Grid/GridContainer.jsx";
import GridItem from "../../assets/components/Grid/GridItem.jsx";
//import Button from "../../assets/components/CustomButtons/Button.jsx";
//import CustomInput from "../../assets/components/CustomInput/CustomInput.jsx";
import stateData from '../../stateData.json';
import image from "../../assets/img/students3.jpg";

const styles = theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
 
  textField: {
    marginLeft: 80,
    marginRight: theme.spacing.unit,
    marginTop: 40
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  },
  margin: {
    marginLeft: 60
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  }
});


class RegistrationPage extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  };

  handleRegister = event => {
    event.preventDefault();
    axios.post("/api/signup", this.state).then(res => {
      this.props.setUser(res);
    });
    console.log(this.state);
  };

  handleChange = firstName => event => {
    this.setState({
      [firstName]: event.target.value
    });
  };
  handleChange = lastName => event => {
    this.setState({
      [lastName]: event.target.value
    });
  };

  handleChange = stateData => event => {
    this.setState({
      [stateData]: event.target.value,
    });
  };

  handleInputChange = event => {
    const target = event && event.target;
    const name = target && target.name;
    const value = target && target.value;
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes, ...rest } = this.props;

    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="Register to Personalize Your Search."
          style={{fontSize: 200 }}
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
          <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
        <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}></GridItem>
        <Card style={{width: 780, height: 400, marginLeft: 80, marginTop: 410 }}>
          <CardBody>
        <form
          //onSubmit={this.handleRegister}
          className={classes.container}
          noValidate
          autoComplete="on"
        >
          <TextField
            id="filled-firstName"
            label="First Name"
            className={classes.textField}
            value={this.state.firstName}
            onChange={this.handleChange("firstName")}
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-lastName"
            label="Last Name"
            className={classes.textField}
            value={this.state.lastName}
            onChange={this.handleChange("lastName")}
            margin="normal"
            variant="filled"
          />

          <TextField
            required
            id="filled-email-input"
            label="Email"
            className={classes.textField}
            value={this.state.email}
            autoComplete="email"
            helperText="*Required"
            margin="normal"
            variant="filled"
            inputProps={{
              type: "text",
              name: "email",
              onChange: this.handleInputChange,
              value: this.state.email
            }}
          />

          <TextField
            required
            id="filled-password-input"
            label="Password"
            className={classes.textField}
            inputProps={{
              inputType: "password",
              name: "password",
              value: this.state.password,
              onChange: this.handleInputChange
            }}

            type="password"
            helperText="*Required"
            autoComplete="current-password"
            margin="normal"
            variant="filled"
          />
          <TextField
            id="filled-select-location"
            select
            className={classes.textField}
            value={this.state.stateData}
            onChange={this.handleChange("stateData")}
            SelectProps={{
              MenuProps: {
                className: classes.menu
              }
            }}
            helperText="Please select the state you live in"
            margin="normal"
            variant="filled"
          >
            {stateData.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
            <Button 
              style={{marginLeft: 100, marginTop: 50, height: 40, width: 100, color: "white", fontSize:15, background: 'linear-gradient(45deg, #00bfa5 30%, #64ffda 90%)'}}
              href="/profile/:id"
              onClick={this.handleRegister}
            >
              <NavigationIcon className={classes.extendedIcon} />
              Submit
            </Button>
          
        </form>
        </CardBody>
        </Card>
        </GridContainer>
          </div>
        <Footer whiteFont />
        </div>
      </div>
    );
  }
}

RegistrationPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(RegistrationPage);