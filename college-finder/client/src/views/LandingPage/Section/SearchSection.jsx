import React from "react";
import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";
import MaterialIcon, { colorPalette } from 'material-icons-react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import NavigationIcon from '@material-ui/icons/Navigation';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import Button from '@material-ui/core/Button';
import GridItem from "../../../assets/components/Grid/GridItem.jsx";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
//import tileData from './tileData';
import stateData from '../../../stateData.json';
import bachelorProgramData from '../../../bachelorProgramData.json';
//import searchStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/searchStyle.jsx";


const styles = theme => ({
  root: {
    textalign: 'center',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 400,
    overflow: 'hidden',
    display: 'flex',
    marginLeft: 100,
  },
  gridListTile: {
    height: 400,
    width: 400,
  },
  textField: {
    marginLeft: 450,
    width: 300,
    marginBottom: 0,
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
    overflow: 'hidden',
  },
  tileImages: {
    width: 200,
    height: 200,
    overflow: 'hidden',
  },
  margin: {
    marginTop: 30,
    marginBottom: 0,
    overflow: 'hidden',
  },

});


class SearchSection extends React.Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handlePost = this.handlePost.bind(this);
  }

  state = {
    stateData: "",
    bachelorProgramData: "",
    satScore: "",
    schoolName: "",
    colleges: [],
    error: null,
    user: window.localStorage.getItem("user")
  };

  handleChange = satScore => event => {
    this.setState({
      [satScore]: event.target.value,
    });
  };

  handleChange = schoolName => event => {
    this.setState({
      [schoolName]: event.target.value,
    });
  };

  handleChange = bachelorProgramData => event => {
    this.setState({
      [bachelorProgramData]: event.target.value,
    });
  };

  handleChange = stateData => event => {
    this.setState({
      [stateData]: event.target.value,
    });
  };


  handleSubmit = () => {

    let queryString = "https://api.data.gov/ed/collegescorecard/v1/schools?";
    const api = "&api_key=tsrb2IQI7sNv5A1HSBCH6lshc45rsbuPpDxsezrl";
    const queryFields = "&_fields=school.name,school.alias,school.city,school.state,school.zip,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.aid.loan_principal,latest.aid.median_debt.completers.overall,school.ownership";


    console.log("---------------------------------------");
    console.log("Searching for the following parameters:");

    //grabs user input from College Search Input. Queries "school.name" if character length greater than 6.
    if (this.state.schoolName.length > 6) {
      let nameOfSchool = this.state.schoolName.trim().split(" ").join("%20");
      let fullSchoolString = "school.name=" + nameOfSchool;
      queryString += fullSchoolString;
      console.log(nameOfSchool);
    }
    //Queries "school.alias" if less than 6.
    else if (this.state.schoolName.length >= 1) {
      let nameOfSchool = this.state.schoolName.trim().split(" ").join("%20");
      let fullAliasString = "school.alias=" + nameOfSchool;
      queryString += fullAliasString;
      console.log(nameOfSchool);
    }

    else {
      console.log("No school searched for.");
    }

    //grabs Bachelors Program from list
    if (this.state.bachelorProgramData !== "") {
      let bachProg = this.state.bachelorProgramData;
      let bachProgString = "&" + bachProg + "=1";
      queryString += bachProgString;
      console.log(bachProg);
    }

    else {
      console.log("No bachelors program searched for.");
    }

    //grabs user selected State
    if (this.state.stateData !== "") {
      let stateInput = this.state.stateData;
      let stateInputString = "&school.state=" + stateInput;
      queryString += stateInputString;
      console.log(stateInput);
    }

    else {
      console.log("No State searched for.");
    }

    //grabs user SAT input
    if (this.state.satScore !== "") {
      let satInput = this.state.satScore;
      let satString = "&latest.admissions.sat_scores.average.overall__range=.." + satInput;
      queryString += satString;
      console.log(satInput);
    }

    else {
      console.log("No SAT score provided.");
    }

    console.log(queryString);
    console.log("---------------------------------------");

    //puts together query string above, searches for corresponding colleges and sets the response to state.
    axios.get(queryString + queryFields + api)

      .then(response => {
        this.setState({
          colleges: response.data.results
        });
      });

  }
  //this saves individual colleges based off the specific button that is pressed.
  handlePost = (event) => {

    event.preventDefault();

    const user = this.state.user;
    const buttonId = event.currentTarget.id;
    const college = this.state.colleges[buttonId];

    console.log("Save Button " + buttonId + " has been clicked by User ID " + user);
    console.log("Saving: ", college["school.name"]);

    axios.post("api/colleges", {

      name: college["school.name"],
      alias: college["school.alias"],
      city: college["school.city"],
      zip: college["school.zip"].toString().substring(0, 5),
      sat_score: college["latest.admissions.sat_scores.average.overall"],
      admission_rate: college["latest.admissions.admission_rate.overall"],
      population: college["latest.student.size"],
      tuition_out_of_state: college["latest.cost.tuition.out_of_state"],
      tuition_in_state: college["latest.cost.tuition.in_state"],
      cost_average_annual: college["latest.cost.attendance.academic_year"],
      loan_average: college["latest.aid.loan_principal"],
      UserId: user,

    })
      .then(function (res) {
        console.log(res.status, "College saved.")
      })
      .catch(function (err) {
        console.log(err);
      });
  }

  render() {

    const { classes, ...rest } = this.props;

    return (
      <div className={classes.root}>
        <div>
          <Typography variant="h5" component="h5" style={{ width: '900px', textAlign: "center", marginTop: '40px', marginBottom: '30px', marginLeft: '180px' }}>
            You're One Step Away from Finding Your Dream School!
          </Typography>
        </div>
        <div class="flex-container">
          <TextField
            id="filled-select-states"
            select
            className={classes.textField}
            value={this.state.stateData}
            style={{ backgroundColor: 'white', }}
            onChange={this.handleChange('stateData')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Narrow Colleges by State"
            margin="normal"
            variant="filled"
          >
            {stateData.map(option => (
              <MenuItem key={option.label} value={option.label}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>

          <TextField
            id="filled-satScore"
            className={classes.textField}
            value={this.state.satScore}
            onChange={this.handleChange('satScore')}
            helperText="Submit your SAT Score if available"
            margin="normal"
            variant="filled"
          />

          <TextField
            id="filled-select-program"
            select
            className={classes.textField}
            value={this.state.bachelorProgramData}
            onChange={this.handleChange('bachelorProgramData')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Please Select an Area of Study"
            margin="normal"
            variant="filled"
          >
            {bachelorProgramData.map(option => (
              <MenuItem key={option.query} value={option.query}>
                {option.program}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            id="filled-school"
            className={classes.textField}
            value={this.state.schoolName}
            onChange={this.handleChange('schoolName')}
            helperText="Search Colleges by Name"
            margin="normal"
            variant="filled"
          />

          <Button
            style={{ marginLeft: 550, marginTop: 20, marginBottom: 30, height: 40, width: 100, color: "white", fontSize: 15, background: 'linear-gradient(45deg, #00bfa5 30%, #64ffda 90%)' }}
            variant="extended"
            size="medium"
            type="submit"
            aria-label="Add"
            onClick={() => this.handleSubmit()}
            className={classes.margin}
          >
            <NavigationIcon className={classes.extendedIcon} />
            Submit
        </Button>
        </div>
        <GridList cellHeight={'auto'} className={classes.gridList} style={{ overflowY: 'scroll', display: 'flex', marginLeft: '160px', }}>
          <div>
            <Typography variant="h5" component="h5" style={{ width: '900px', textAlign: "center" }}>
              College Lists Based on Your Search Criteria
          </Typography>
          </div>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto', width: '600px', marginTop: '30px', marginBottom: '20px', marginLeft: '150px' }}>

            {this.state.colleges.map((college, i) => {
              return (

                <GridItem style={{ marginTop: '30px', marginBottom: '20px', }}>
                  <div className={classes.container}>

                    <Card className={classes.card}>
                      <CardContent key={college["school.name"]}>
                        <Typography variant="h5" component="h2">
                          School Name: {college["school.name"]}
                        </Typography>
                        <Typography className={classes.pos} color="textSecondary">
                        </Typography>

                        <Typography component="p">
                          State: {college["school.state"]}
                          <br />
                          Average SAT Score: {college["latest.admissions.sat_scores.average.overall"]}
                          <br />
                          In State Cost: {college["latest.cost.tuition.in_state"]}
                          <br />
                          Out of State Cost: {college["latest.cost.tuition.out_of_state"]}
                        </Typography>
                      </CardContent>

                      <CardActions >
                        <IconButton
                          className={classes.icon}
                          key={i}
                          id={i}
                          onClick={(event) => this.handlePost(event)}
                        >
                          <MaterialIcon icon="turned_in_not" color={colorPalette.teal._400} />
                        </IconButton>
                        <Button size="small">Link to School Site</Button>
                      </CardActions>

                    </Card>
                  </div>
                </GridItem>
              )
            })}
          </GridListTile>
        </GridList>
      </div>
    );
  };
}

SearchSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchSection);