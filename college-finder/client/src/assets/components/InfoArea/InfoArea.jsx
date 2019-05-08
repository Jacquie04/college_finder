import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

import infoStyle from "../../../assets/jss/material-kit-react/components/infoStyle.jsx";

function InfoArea({ ...props }) {
  const { classes, title, description, vertical } = props;
  return (
      <div className={classes.descriptionWrapper}>
        <h4 className={classes.title}>{title}</h4>
        <p className={classes.description}>{description}</p>
      </div>
  );
}

InfoArea.propTypes = {
  classes: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  vertical: PropTypes.bool
};

export default withStyles(infoStyle)(InfoArea);
