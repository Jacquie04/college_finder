import React from 'react';
import { makeStyles, ThemeProvider } from "@material-ui/styles";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MaterialIcon, {colorPalette} from 'material-icons-react';

const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    margin: 'auto',
    width: 'fit-content',
  },
  formControl: {
    marginTop: theme.spacing(2),
    minWidth: 120,
  },
  formControlLabel: {
    marginTop: theme.spacing(1),
  },
}));

function DialogBox() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [fullWidth] = React.useState(true);
  const [maxWidth] = React.useState('md');

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }


  return (
    <ThemeProvider theme={theme}>
    <React.Fragment>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open max-width dialog
      </Button>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        open={open}
        onClose={handleClose}
        aria-labelledby="max-width-dialog-title"
      >
        <div>
          <Typography variant="h5" component="h5" style={{ textAlign: "center" }}>
            College Lists Based on Your Search Criteria
          </Typography>
          </div>
        <DialogContent>
          <DialogContentText>
            Some colleges do not display all of your requested information, please contact the school if the information is missing. 
          </DialogContentText>
          {this.state.colleges.map((college, i) => {
            return (
          <Card className={classes.card}>
            <CardContent key={college["school.name"]}>
              <Typography variant="h5" component="h2">
                School Name: {college["school.name"]}
              </Typography>
              <Typography className={classes.pos} color="textSecondary">
               
              </Typography>
              <Typography component="p">
                State: {college["school.state"]}
                <br />
                Average SAT Score: { college["latest.admissions.sat_scores.average.overall"]} 
                <br />
                In State Cost: {college["latest.cost.tuition.in_state"]}
                <br />
                Out of State Cost: {college["latest.cost.tuition.out_of_state"]}
              </Typography>
            </CardContent>
            <CardActions >
                <IconButton 
                  className={classes.icon}
                  key={i}
                  id={i}
                  onClick={() => this.handlePost(college.id)}
                >
                <MaterialIcon icon="turned_in_not" color={colorPalette.teal._400}/>
                </IconButton>
              <Button size="small">Link to School Site</Button>
            </CardActions>
          </Card>
          )
        })}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
    </ThemeProvider>
  );
}

export default makeStyles()(DialogBox);