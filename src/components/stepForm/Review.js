import React from "react";
import { ListItemText } from "@material-ui/core";
import { ListItem } from "@mui/material";
import { List } from "@material-ui/core";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textCenter: {
    textAlign: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const Review = ({ formData, prevStep, nextStep }) => {
  const classes = useStyles();
  const {
    firstName,
    lastName,
    nickName,
    address,
    city,
    state,
    zip,
    phone,
    email,
  } = formData;
  return (
    <>
      <h1 style={{ marginLeft: "35rem" }}> Review Data </h1>
      <div>
        <List>
          <ListItem>
            <ListItemText
              primary="First Name"
              secondary={firstName}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Last Name"
              secondary={lastName}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Nick Name"
              secondary={nickName}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Address"
              secondary={address}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="City"
              secondary={city}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="State"
              secondary={state}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Zip"
              secondary={zip}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Phone Number"
              secondary={phone}
              className={classes.textCenter}
            />
          </ListItem>
          <ListItem>
            <ListItemText
              primary="Email"
              secondary={email}
              className={classes.textCenter}
            />
          </ListItem>
        </List>
        <div className={classes.textCenter}>
          <Button
            color="secondary"
            variant="contained"
            className={classes.button}
            onClick={() => prevStep()}
          >
            Back
          </Button>

          <Button
            color="primary"
            variant="contained"
            className={classes.button}
            onClick={() => nextStep()}
          >
            Confirm & Continue
          </Button>
        </div>
      </div>
    </>
  );
};

Review.propTypes = {
  formData: PropTypes.object.isRequired,
  prevStep: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
