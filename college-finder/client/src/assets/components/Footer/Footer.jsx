/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";
import Button from '@material-ui/core/Button';

import footerStyle from "../../../assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });

  const handleLogout = () => {
    event.preventDefault();
    console.log("Logging out!");
    localStorage.clear();
    window.location.href = '/';
  }
  

  return (
    <footer className={footerClasses}>
      <div className={classes.container}>
        <div className={classes.left}>
          <List className={classes.list}>
        
            <ListItem className={classes.inlineBlock}>
              <a
                href="https://github.com/Jacquie04/college_finder.git"
                className={classes.block}
                target="_blank"
              >
                Click Here to link to our Github!
              </a>
            </ListItem>
          </List>
        </div>
        <div className={classes.inlineBlock}>
        <Button 
                style={{color: "white", fontSize:15, marginLeft: -110, background: 'linear-gradient(45deg, #00bfa5 30%, #64ffda 90%)'}}
                onClick={ (event) => handleLogout(event)}
             > Log me out</Button>
        </div>
        <div className={classes.right}>
          &copy; {1900 + new Date().getYear()} College Finder
        </div>
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
