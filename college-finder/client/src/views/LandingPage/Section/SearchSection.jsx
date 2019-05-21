import React from "react";
import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";
import MaterialIcon, {colorPalette} from 'material-icons-react';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
//import tileData from './tileData';
import stateData from '../../../stateData.json';
import bachelorProgramData from '../../../bachelorProgramData.json';
import image1 from '../../../assets/img/college5.jpg';
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
    width: 900,
    height: 1000
  },
  gridListTile: {
    height: 400,
    width: 400,
  },
  textField: {
    display: 'flex',
    justifyContent: 'space-around'
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
  },

});


class SearchSection extends React.Component {

  state = {
    stateData: "",
    bachelorProgramData: "",
    satScore: "",
    schoolName: "",
    colleges: [],
    error: null
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
    var api = "&api_key=tsrb2IQI7sNv5A1HSBCH6lshc45rsbuPpDxsezrl";
    var queryFields = "&_fields=school.name,school.alias,school.city,school.state,school.zip,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.aid.loan_principal,latest.aid.median_debt.completers.overall,school.ownership";


    console.log("---------------------------------------");
    console.log("Searching for the following parameters:");

    //grabs user input from College Search Input
    if (this.state.schoolName.length > 6) {
      let nameOfSchool = this.state.schoolName.trim().split(" ").join("%20");
      var fullSchoolString = "school.name=" + nameOfSchool;
      queryString += fullSchoolString;
      console.log(nameOfSchool);
    }

    else if (this.state.schoolName.length >= 1) {
      let nameOfSchool = this.state.schoolName.trim().split(" ").join("%20");
      var fullAliasString = "school.alias=" + nameOfSchool;
      queryString += fullAliasString;
      console.log(nameOfSchool);
    }

    else {
      console.log("No school searched for");
    }

    //grabs Bachelors Program from list
    if (this.state.bachelorProgramData !== "") {
      let bachProg = this.state.bachelorProgramData;
      let bachProgString = "&" + bachProg + "=1";
      queryString += bachProgString;
      console.log(bachProg);
    }

    else {
      console.log("No bachelors program searched for");
    }

    //grabs user selected State
    if (this.state.stateData !== "") {
      let stateInput = this.state.stateData;
      let stateInputString = "&school.state=" + stateInput;
      queryString += stateInputString;
      console.log(stateInput);
    }

    else {
      console.log("No State searched for");
    }

    //grabs user SAT input
    if (this.state.satScore !== "") {
      let satInput = this.state.satScore;
      let satString = "&latest.admissions.sat_scores.average.overall__range=.." + satInput;
      queryString += satString;
      console.log(satInput);
    }

    else {
      console.log("No SAT score provided");
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

  render() {

    const { classes, ...rest } = this.props;

    return (
      <div className={classes.root}>
        <GridList cellHeight={'auto'} className={classes.gridList}>
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader className={classes.listSubheader} component="div">The search begins here!</ListSubheader>

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
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
            <ListSubheader component="div">College Lists Based on Your Search Criteria</ListSubheader>
          </GridListTile>

          {this.state.colleges.map(function (college) {
            return (
              <GridListTile key={college["school.name"]} style={{ height: '300px', width: '400px' }}>
                <img alt="college" src={image1} />
                <GridListTileBar style={{height: '100px', wordWrap: 'break-word'}}
                  title={<span> {college["school.name"]} </span>}
                  subtitle= {<span> Average SAT Score: { college["latest.admissions.sat_scores.average.overall"]} <br></br>
                  State: {college["school.state"]} <br></br> In State Cost: {college["latest.cost.tuition.in_state"]}
                  <br></br> Out of State Cost: {college["latest.cost.tuition.out_of_state"]}
                    </span>}
                  actionIcon={
                    <IconButton className={classes.icon}>
                    <MaterialIcon icon="turned_in" color={colorPalette.grey._50}/>
                    </IconButton>
                  }
                />
              </GridListTile>
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