import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
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
function SearchSection(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <GridList cellHeight={180} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto', align: 'center'}}>
          <ListSubheader component="div">College Lists Based on Your Search Criteria</ListSubheader>
          <TextField
          id="filled-select-location"
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
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          id="filled-select-cost"
          select
          className={classes.textField}
          value={this.state.bachelorProgramData.cost}
          onChange={this.handleChange('costs')}
          SelectProps={{
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Select an Ideal Cost of Attendance Range"
          margin="normal"
          variant="filled"
        >
          {bachelorProgramData.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="filled-select-program"
          select
          className={classes.textField}
          value={this.state.bachelorProgramData.programs}
          onChange={this.handleChange('programs')}
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
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>

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
}

SearchSection.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchSection);