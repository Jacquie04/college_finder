import React from "react";
import axios from "axios";
import withStyles from "@material-ui/core/styles/withStyles";

//components for login page
import Header from "../../assets/components/Header/Header.jsx";
import HeaderLinks from "../../assets/components/Header/HeaderLinks.jsx";
import Footer from "../../assets/components/Footer/Footer.jsx";
import GridContainer from "../../assets/components/Grid/GridContainer.jsx";
import GridItem from "../../assets/components/Grid/GridItem.jsx";
import Button from "../../assets/components/CustomButtons/Button.jsx";
import Card from "../../assets/components/Card/Card.jsx";
import CardBody from "../../assets/components/Card/CardBody.jsx";
import CardHeader from "../../assets/components/Card/CardHeader.jsx";
import CardFooter from "../../assets/components/Card/CardFooter.jsx";
import CustomInput from "../../assets/components/CustomInput/CustomInput.jsx";
import loginPageStyle from "../../assets/jss/material-kit-react/views/loginPage.jsx";
import { Link } from "react-router-dom";
import image from "../../assets/img/college2.jpg";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    //    this.state = {
    //      cardAnimaton: "cardHidden"
    //    };
  }
  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    // setTimeout(
    //    function() {
    //       this.setState({ cardAnimaton: "" });
    //     }.bind(this),
    //     700
    //   );
  }

  //AUTHENTIFICATION
  state = {
    email: "",
    password: ""
  };

  handleLogin = event => {
    event.preventDefault();

    // debugger;
    axios.post("/api/login", this.state).then(res => {
      console.log(res, 'in login post')
      this.props.setUser(res);
    });
    console.log(this.state);
  };

  handleInputChange = event => {
    const target = event && event.target;
    const name = target && target.name;
    const value = target && target.value;

    // debugger;

    console.log('handleInputChange');
    console.log(name, value);
    this.setState({
      [name]: value
    });
  };

  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          absolute
          color="transparent"
          brand="College Finder"
          rightLinks={<HeaderLinks />}
          {...rest}
        />
        <div
          className={classes.pageHeader}
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "cover",
            backgroundPosition: "top center"
          }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={4}>
                <Card className={classes[this.state.cardAnimaton]}>

                  <form onSubmit={this.handleLogin} className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                    </CardHeader>
                    <p className={classes.divider}>Or Sign Up</p>
                    <CardBody>
                      {/* value={this.state.email} */}
                      <CustomInput
                        labelText="Email..."
                        id="email"
                        inputProps={{
                          type: "text",
                          name: "email",
                          onChange: this.handleInputChange,
                          value: this.state.email
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                      <CustomInput
                        labelText="Password"
                        id="pass"
                        inputProps={{
                          inputType: "password",
                          name: "password",
                          value: this.state.password,
                          onChange: this.handleInputChange
                        }}
                        formControlProps={{
                          fullWidth: true
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Link to="/profile/:id" style={{ color: "white", textDecoration: "none" }}> <Button onClick={this.handleLogin} simple color="primary" size="lg">
                        Log In
                        </Button></Link>
                      <Link to="/signup" style={{ color: "white", textDecoration: "none" }}> <Button simple color="primary" size="lg">
                        Sign Up!
                        </Button></Link>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
          <Footer whiteFont />
        </div>
      </div>
    );
  }
}

export default withStyles(loginPageStyle)(LoginPage);