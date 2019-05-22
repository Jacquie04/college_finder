import React from "react";
// nodejs library that concatenates classes
import PropTypes from 'prop-types';
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
/*import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite"; */
import GridContainer from "../../assets/components/Grid/GridContainer.jsx";
import GridItem from "../../assets/components/Grid/GridItem.jsx";
// core components
import Header from "../../assets/components/Header/Header.jsx";
import HeaderLinks from "../../assets/components/Header/HeaderLinks.jsx";
import Parallax from "../../assets/components/Parallax/Parallax.jsx"; 
/* import Footer from "../../assets/components/Footer/Footer.jsx";
import Button from "../../assets/components/CustomButtons/Button.jsx";
import NavPills from "../../assets/components/NavPills/NavPills.jsx";
*/

//import profile from "../../assets/img/faces/christian.jpg";


const styles = {
  card: {
    minWidth: 275,
    marginLeft: 40,
    marginRight: 50,
    maxWidth: 'auto',
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  container: {
    marginLeft: 50,
  }
};

class ProfilePage extends React.Component {
  render() {
    const { classes, ...rest } = this.props;
  
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
       <Parallax small filter image={require("../../assets/img/students1.jpg")} >
       </Parallax>
       <div className={classes.container}>
       <GridContainer>
       <div className={classes.container}>
        <h1>You can Review your Saved Colleges Here!</h1>
        </div>
       
        <GridItem> 
        <div className={classes.container}>
            <Card className={classes.card}>
      <CardContent>
        <Typography variant="h5" component="h2">
          School Name
        </Typography>
        <Typography className={classes.pos} color="textSecondary">
          Programs Offered:
        </Typography>
        <Typography component="p">
          State:
          <br />
          Average SAT Score:
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Link to School Site</Button>
        <Button size="small">Delete School From List</Button>
      </CardActions>
    </Card>
    </div>
        </GridItem>
         </GridContainer>
      </div>
    </div>
    
   );
  };
};

ProfilePage.propTypes = {
  classes: PropTypes.object.isRequired,
};       

export default withStyles(styles)(ProfilePage);
