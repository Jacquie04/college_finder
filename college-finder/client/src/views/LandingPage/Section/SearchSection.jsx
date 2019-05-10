import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
//import Chat from "@material-ui/icons/Chat";
//import VerifiedUser from "@material-ui/icons/VerifiedUser";
//import Fingerprint from "@material-ui/icons/Fingerprint";
// core components

import GridContainer from "../../../assets/components/Grid/GridContainer.jsx";
import GridItem from "../../../assets/components/Grid/GridItem.jsx";
import InfoArea from "../../../assets/components/InfoArea/InfoArea.jsx";

import searchStyle from "../../../assets/jss/material-kit-react/views/landingPageSections/searchStyle.jsx";

class SearchSection extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.section}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>Now You're Ready to Start your College Search!</h2>
            <h5 className={classes.description}>
            You will have to choose which state you want to go to school in to help us narrow
            your search. You have the option of narrowing schools by cost, program, and SAT scores.
            You can also see if you match with a school based on your own SAT score!
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="College 1"
                description="Your first college match will appear here."
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="College 2"
                description="Your second college match will appear here."
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="College 3"
                description="Your third college match will appear here."
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(searchStyle)(SearchSection);