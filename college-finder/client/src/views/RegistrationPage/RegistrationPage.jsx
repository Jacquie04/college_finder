import React from "react";
import { Link } from "react-router-dom";
import withStyles from "@material-ui/core/styles/withStyles";

import PropTypes from 'prop-types';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
//import IconButton from '@material-ui/core/IconButton';

//components for login page
import Header from "../../assets/components/Header/Header.jsx";
//import HeaderLinks from "../../assets/components/Header/HeaderLinks.jsx";
import Footer from "../../assets/components/Footer/Footer.jsx";
//import GridContainer from "../../assets/components/Grid/GridContainer.jsx";
//import GridItem from "../../assets/components/Grid/GridItem.jsx";
//import Button from "../../assets/components/CustomButtons/Button.jsx";
//import CustomInput from "../../assets/components/CustomInput/CustomInput.jsx";

//import image from "../../assets/img/college5.jpg";


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

  const locations = [
    {
      value: 'Alabama',
      label: 'AL',
    },
    {
      value: 'Alaska',
      label: 'AK',
    },
    {
      value: 'Arizona',
      label: 'AZ',
    },
    {
      value: 'Arkansas',
      label: 'AR',
    },
    {
        value: 'California',
        label: 'CA',
      },
      {
        value: 'Colorado',
        label: 'CO',
      },
      {
        value: 'Connecticut',
        label: 'CT',
      },
      {
        value: 'Delaware',
        label: 'DE',
      },
      {
        value: 'Florida',
        label: 'FL',
      },
      {
        value: 'Georgia',
        label: 'GA',
      },
      {
        value: 'Hawaii',
        label: 'HI',
      },
      {
        value: 'Idaho',
        label: 'ID',
      },
      {
        value: 'Illinois',
        label: 'IL',
      },
      {
        value: 'Indiana',
        label: 'IN',
      },
      {
        value: 'Iowa',
        label: 'IA',
      },
      {
        value: 'Kansas',
        label: 'KS',
      },
      {
        value: 'Kentucky',
        label: 'KY',
      },
      {
        value: 'Louisiana',
        label: 'LA',
      },
      {
        value: 'Maine',
        label: 'ME',
      },
      {
        value: 'Maryland',
        label: 'MD',
      },
      {
        value: 'Massachusetts',
        label: 'MA',
      },
      {
        value: 'Michigan',
        label: 'MI',
      },
      {
        value: 'Minnesota',
        label: 'MN',
      },
      {
        value: 'Mississippi',
        label: 'MS',
      },
      {
        value: 'Missouri',
        label: 'MO',
      },
      {
        value: 'Montana',
        label: 'MT',
      },
      {
        value: 'Nebraska',
        label: 'NE',
      },
      {
        value: 'Nevada',
        label: 'NV',
      },
      {
        value: 'New Hampshire',
        label: 'NH',
      },
      {
        value: 'New Jersey',
        label: 'NJ',
      },
      {
        value: 'New Mexico',
        label: 'NM',
      },
      {
        value: 'New York',
        label: 'NY',
      },
      {
        value: 'North Carolina',
        label: 'NC',
      },
      {
        value: 'North Dakota',
        label: 'ND',
      },
      {
        value: 'Ohio',
        label: 'OH',
      },{
        value: 'Oklahoma',
        label: 'OK',
      },
      {
        value: 'Oregon',
        label: 'OR',
      },
      {
        value: 'Pennsylvania',
        label: 'PA',
      },
      {
        value: 'Rhode Island',
        label: 'RI',
      },
      {
        value: 'South Carolina',
        label: 'SC',
      },
      {
        value: 'South Dakota',
        label: 'SD',
      },
      {
        value: 'Tennessee',
        label: 'TN',
      },
      {
        value: 'Texas',
        label: 'TX',
      },
      {
        value: 'Utah',
        label: 'UT',
      },
      {
        value: 'Vermont',
        label: 'VT',
      },
      {
        value: 'Virginia',
        label: 'VA',
      },
      {
        value: 'Washington',
        label: 'WA',
      },
      {
        value: 'West Virginia',
        label: 'WV',
      },
      {
        value: 'Wisconsin',
        label: 'WI',
      },
      {
        value: 'Wyoming',
        label: 'WY',
      },
      
  ];

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


      <form className={classes.container} noValidate autoComplete="on">
        <TextField
          required
          id="filled-firstName"
          className={classes.textField}
          value={this.state.firstName}
          onChange={this.handleChange('firstName')}
          helperText="*Required"
          margin="normal"
          variant="filled"
        />

        <TextField
          required
          id="filled-lastName"
          className={classes.textField}
          value={this.state.lastName}
          onChange={this.handleChange('lastName')}
          helperText="*Required"
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
          helperText="*Required"
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
          id="filled-select-location"
          select
          className={classes.textField}
          value={this.state.locations}
          onChange={this.handleChange('locations')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select the state you live in"
          margin="normal"
          variant="filled"
        >
          {locations.map(option => (
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

                <Footer whiteFont />
        </div>
        );
    };
};

RegistrationPage.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(RegistrationPage);