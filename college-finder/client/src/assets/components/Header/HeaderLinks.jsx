import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";
import MaterialIcon, {colorPalette} from 'material-icons-react';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";


// core components

import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
       <Link to="/home" style={{color:"white", textDecoration:"none"}}><Button
          color="transparent"
          target="_blank"
          className={classes.navLink}
        > <MaterialIcon icon="search" color={colorPalette.grey._50}/> Welcome! Your college selection starts now!
        </Button> </Link>
      </ListItem>
      <ListItem className={classes.listItem}>
       <Link to="/profile/:id" style={{color:"white", textDecoration:"none"}}> <Button
          Link to="/profile/:id"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        > <MaterialIcon icon="turned_in_not" color={colorPalette.grey._50}/> Saved Colleges
        </Button> </Link>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
