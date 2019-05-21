import React from "react";

import classNames from "classnames";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import Header from "../../assets/components/Header/Header.jsx";
import HeaderLinks from "../../assets/components/Header/HeaderLinks.jsx";
import Footer from "../../assets/components/Footer/Footer.jsx";
import GridContainer from "../../assets/components/Grid/GridContainer.jsx";
import GridItem from "../../assets/components/Grid/GridItem.jsx";
//import Button from "../../assets/components/CustomButtons/Button.jsx";
//import HeaderLinks from "../../assets/components/Header/HeaderLinks.jsx";
import Parallax from "../../assets/components/Parallax/Parallax.jsx";

import landingPageStyle from "../../assets/jss/material-kit-react/views/landingPage.jsx";

// Section for this page
import SearchSection from "./Section/SearchSection";

const dashboardRoutes = [];

class LandingPage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          color="transparent"
          routes={dashboardRoutes}
          brand="College Finder"
          fixed
          changeColorOnScroll={{
            height: 400,
            color: "white"
          }}
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <Parallax filter image={require("../../assets/img/college1.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>Your College Search Starts Here.</h1>
                <h4>
                 Applying to college is a very exciting time in your life, however, it can also 
                 become overwhelming. College Finder is here to help! Our goal is to allow our users
                 to search, match and save prospective colleges to help reduce the stress of finding
                 the right school. 
                </h4>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>
        <div className={classNames(classes.main, classes.mainRaised)}>
          <div className={classes.container}>
            <SearchSection />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withStyles(landingPageStyle)(LandingPage);
