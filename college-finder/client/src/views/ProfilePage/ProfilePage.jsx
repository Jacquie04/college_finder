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
import Axios from "axios";
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

  constructor(props) {
    super(props);
    this.loadData = this.loadData.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }


  state = {
    colleges: [],
    user: window.localStorage.getItem("user")
  };


  loadData = () => {

    let user = this.state.user;

    Axios.get("api/colleges/" + user)
      //.then(response => console.log(response.data.results))
      .then(response => {
        this.setState({
          colleges: response.data
        });

        console.log("User " + user + " array:");
        console.log(response.data);
        console.log("----------------");
      })
      .catch(error => {
        console.log("error: ", error);
      });
  };

  componentDidMount() {
    this.loadData();
  };

  handleDelete = (event) => {

    event.preventDefault();

    let targetId = event.currentTarget.id;
    let currentColleges = this.state.colleges;
    let filteredColleges = currentColleges.filter(college => college.id != targetId);

    console.log("College id " + targetId + " clicked by User " + this.state.user + ". Deleting College: " + event.currentTarget.name);

    this.setState ({
      colleges: filteredColleges 
    });

    Axios.delete("api/colleges/" + targetId)
      .then(response => {
        if (response.status === "error") {

          this.setState ({
            colleges: currentColleges
          });

        } else {
          //this code is currently not reached. Further investigation needed.
          console.log(response);
          return response;
        }
      });

  }

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

            {this.state.colleges.map((college, i) => {
              return (

                <GridItem>
                  <div className={classes.container}>

                    <Card className={classes.card}>
                      <CardContent key={college.name}>
                        <Typography variant="h5" component="h2">
                          {college.name}
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
                        <Button size="small"
                          key={i}
                          id={college.id}
                          name={college.name}
                          onClick={ (event) => this.handleDelete(event) }
                          >Delete School From List
                        </Button>
                      </CardActions>

                    </Card>
                  </div>
                </GridItem>

              )
            })}

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
