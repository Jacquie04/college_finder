import React from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";
//import classNames from "classnames";
import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
//import IconButton from '@material-ui/core/IconButton';
import Parallax from "../../assets/components/Parallax/Parallax.jsx";
//components for login page
import Header from "../../assets/components/Header/Header.jsx";
//import HeaderLinks from "../../assets/components/Header/HeaderLinks.jsx";
import Footer from "../../assets/components/Footer/Footer.jsx";
import GridContainer from "../../assets/components/Grid/GridContainer.jsx";
//import GridItem from "../../assets/components/Grid/GridItem.jsx";
//import Button from "../../assets/components/CustomButtons/Button.jsx";
//import CustomInput from "../../assets/components/CustomInput/CustomInput.jsx";
import stateData from '../../stateData.json';



const styles = theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: 60,
      marginRight: theme.spacing.unit,
      marginTop: 80,
    },
    dense: {
      marginTop: 16,
    },
    menu: {
      width: 200,
    },
    margin: {
      marginLeft: 60,
    },
    extendedIcon: {
      marginRight: theme.spacing.unit,
    },
  });


class RegistrationPage extends React.Component {

  state = {
    firstName: 'John',
    lastName: 'Smith',
    email: 'example@gmail.com'
  };

  handleChange = firstName => event => {
    this.setState({
      [firstName]: event.target.value,
    });
  };
  handleChange = lastName => event => {
    this.setState({
      [lastName]: event.target.value,
    });
  };
  handleChange = email => event => {
    this.setState({
      [email]: event.target.value,
    });
  };

  render() {
    const { classes, ...rest} = this.props;

    return (
    
    <div>
    
    <Header
          absolute
          color="transparent"
          brand="College Finder"
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          {...rest}
        />
        
 <Parallax filter image={require("../../assets/img/students3.jpg")}>
 <div className={classes.container}>
            <GridContainer>
                <h1 className={classes.title} style={{color: "white", marginLeft: 100 }}>Register to Personalize Your Search.</h1>

            </GridContainer>
          </div>
        </Parallax>
        <div className={classes.container} style={{ marginTop: 100 }}>
        <GridContainer>
      <form className={classes.container} noValidate autoComplete="on">
        <TextField
          required
          id="filled-firstName"
          className={classes.textField}
          value={this.state.firstName}
          onChange={this.handleChange('firstName')}
          margin="normal"
          variant="filled"
        />

        <TextField
          required
          id="filled-lastName"
          className={classes.textField}
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          margin="normal"
          variant="filled"
        />


        <TextField
          required
          id="filled-email-input"
          className={classes.textField}
          value={this.state.email}
          onChange={this.handleChange('email')}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
        />

        <TextField
          required
          id="filled-password-input"
          label="Password"
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
          variant="filled"
        />

        <TextField
          id="filled-select-stateData"
          select
          className={classes.textField}
          value={this.state.stateData}
          onChange={this.handleChange('stateData')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
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
        <div>
        <Link to="/profile/:id"style={{ textDecoration:"none"}}><Fab
          variant="extended"
          size="medium"
          type="submit"
          color='primary'
          aria-label="Add"
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Submit
        </Fab> </Link>
        </div>
      </form>
     
      </GridContainer>
       </div>
                <Footer whiteFont />
        </div>
        );
    };
};

RegistrationPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(RegistrationPage);