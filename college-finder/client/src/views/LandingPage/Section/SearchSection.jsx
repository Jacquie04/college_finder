import React from "react";
import axios from "axios";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import NavigationIcon from '@material-ui/icons/Navigation';
import Fab from '@material-ui/core/Fab';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
//import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
//import IconButton from '@material-ui/core/IconButton';
//import InfoIcon from '@material-ui/icons/Info';
//import tileData from './tileData';
import stateData from '../../../stateData.json';
import bachelorProgramData from '../../../bachelorProgramData.json'

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
    width: 500,
    height: 450,
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
});

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */

class SearchSection extends React.Component {

  state = {
    stateData,
    bachelorProgramData,
    satScore: 0,
    schoolName: 'University of California Los Angeles'
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
    console.log("I AM A BUTTON!");
    console.log(this.state.schoolName);
    console.log(this.state.bachelorProgramData);
    console.log(this.state.stateData);
    console.log(this.state.satScore);

    let nameOfSchool = this.state.schoolName.split(" ").join("%20");
    console.log(nameOfSchool);

    axios.get("https://api.data.gov/ed/collegescorecard/v1/schools?school.state=CA&latest.admissions.sat_scores.average.overall__range=..1400&_fields=school.name,school.alias,school.city,school.state,school.zip,latest.admissions.admission_rate.overall,latest.admissions.sat_scores.average.overall,latest.student.size,latest.cost.attendance.academic_year,latest.cost.tuition.in_state,latest.cost.tuition.out_of_state,latest.aid.loan_principal,latest.aid.median_debt.completers.overall,school.ownership&api_key=tsrb2IQI7sNv5A1HSBCH6lshc45rsbuPpDxsezrl")
      .then(response => console.log(response.data.results[0]));
  }


  render() {
    const { classes, ...rest} = this.props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto', align: 'center'}}>
          <ListSubheader component="div">College Lists Based on Your Search Criteria</ListSubheader>

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
          onClick={ () => this.handleSubmit() }
          className={classes.margin}
        >
          <NavigationIcon className={classes.extendedIcon} />
          Submit
        </Fab>

        </GridListTile>
        {/* {tileData.map(tile => (
          <GridListTile key={tile.img}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar
              title={tile.title}
              subtitle={<span>by: {tile.author}</span>}
              actionIcon={
                <IconButton className={classes.icon}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))} */}
      </GridList>
      
    </div>
  );
};
}

SearchSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchSection);