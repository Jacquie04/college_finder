import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons

/*import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite"; */


// core components
import Header from "../../assets/components/Header/Header.jsx";
import HeaderLinks from "../../assets/components/Header/HeaderLinks.jsx";
import Parallax from "../../assets/components/Parallax/Parallax.jsx"; 
/* import Footer from "../../assets/components/Footer/Footer.jsx";
import Button from "../../assets/components/CustomButtons/Button.jsx";
import GridContainer from "../../assets/components/Grid/GridContainer.jsx";
import GridItem from "../../assets/components/Grid/GridItem.jsx";
import NavPills from "../../assets/components/NavPills/NavPills.jsx";
*/

//import profile from "../../assets/img/faces/christian.jpg";


import profilePageStyle from "../../assets/jss/material-kit-react/views/profilePage.jsx";

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
    const imageClasses = classNames(
      classes.imgRaised,
      classes.imgRoundedCircle,
      classes.imgFluid
    );
  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);
  return (
    <div>
      <Header
        color="transparent"
        brand="College Finder"
        rightLinks={<HeaderLinks />}
        fixed
        changeColorOnScroll={{
          height: 200,
          color: "white"
        }}
        {...rest}
      />
       <Parallax small filter image={require("../../assets/img/students1.jpg")} />
    </div>
   );
  };
};

         

export default withStyles(profilePageStyle)(ProfilePage);
