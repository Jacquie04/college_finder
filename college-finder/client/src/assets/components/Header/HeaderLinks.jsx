/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CustomDropdown.jsx";
import Button from "../CustomButtons/Button.jsx";

import headerLinksStyle from "../../../assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/Home"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        > <i className={"fab fa-search"} /> Welcome! Your college selection starts now!
        </Button>
      </ListItem>
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
