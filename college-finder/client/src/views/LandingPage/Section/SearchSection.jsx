import React from "react";
import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
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
    display: 'flex',
    textalign: 'center',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: 1000,
    height: 1000
  },
  gridListTile: {
    height: 400,
    width: 400,
  },
  textField: {
    display: 'flex',
    justifyContent: 'space-around', 
    marginBottom: 0
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
  tileImages: {
    width: 200,
    height: 200,
  },
  margin: {
    marginTop: 30,
    marginBottom: 0
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

    //grabs user input from College Search Input
    if (this.state.schoolName.length > 6) {
      let nameOfSchool = this.state.schoolName.trim().split(" ").join("%20");
      let fullSchoolString = "school.name=" + nameOfSchool;
      queryString += fullSchoolString;
      console.log(nameOfSchool);
    }

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


    axios.get(queryString + queryFields + api)
      //.then(response => console.log(response.data.results))
      .then(response => {
        this.setState({
          colleges: response.data.results
        });
      });

  }

  handlePost = (event) => {

    event.preventDefault();

    let user = this.state.user;
    let targetId = event.currentTarget.id

    console.log("Save Button " + targetId + " has been clicked by User ID " + user);
    console.log("Expecting to see:")
    console.log(this.state.colleges[targetId]);
   
    axios.post("api/colleges", {
      name: this.state.colleges[targetId]["school.name"],
      alias: this.state.colleges[targetId]["school.alias"],
      city: this.state.colleges[targetId]["school.city"],
      zip: this.state.colleges[targetId]["school.zip"],
      sat_score: this.state.colleges[targetId]["latest.admissions.sat_scores.average.overall"],
      admission_rate: this.state.colleges[targetId]["latest.admissions.admission_rate.overall"],
      population: this.state.colleges[targetId]["latest.student.size"],
      tuition_out_of_state: this.state.colleges[targetId]["latest.cost.tuition.out_of_state"],
      tuition_in_state: this.state.colleges[targetId]["latest.cost.tuition.in_state"],
      cost_average_annual: this.state.colleges[targetId]["latest.cost.attendance.academic_year"],
      loan_average: this.state.colleges[targetId]["latest.aid.loan_principal"],
      UserId: user,

    })
      .then(function (res) {
        console.log("What we actually get:")
        console.log(res.data);
      })
        .catch(function (err) {
          console.log(err);
        });
  }

  render() {

    const { classes, ...rest } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={'auto'} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <div>
          <Typography variant="h5" component="h5" style={{ width: '900px', textAlign: "center", marginTop: '40px', marginBottom: '30px' }}>
            You're One Step Away from Finding Your Dream School!
          </Typography>
          </div>

            <TextField
              id="filled-select-states"
              select
              className={classes.textField}
              value={this.state.stateData}
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

            <Fab
              variant="extended"
              size="medium"
              type="submit"
              color='primary'
              aria-label="Add"
              onClick={() => this.handleSubmit()}
              className={classes.margin}
            >
              <NavigationIcon className={classes.extendedIcon} />
              Submit
        </Fab>

          </GridListTile>
          <div>
          <Typography variant="h5" component="h5" style={{ width: '900px', textAlign: "center" }}>
            College Lists Based on Your Search Criteria
          </Typography>
          </div>
          {this.state.colleges.map((college, i) => {
            return (
              <GridItem> 
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
                Average SAT Score: { college["latest.admissions.sat_scores.average.overall"]} 
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
                <MaterialIcon icon="turned_in_not" color={colorPalette.teal._400}/>
                </IconButton>
              <Button size="small">Link to School Site</Button>
            </CardActions>
          </Card>
          </div>
              </GridItem>
            )
          })}

        </GridList>
      </div>
    );
  };
}

SearchSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchSection);