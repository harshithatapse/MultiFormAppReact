import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  textCenter: {
    textAlign: "center",
  },
}));

export const Submit = () => {
  const classes = useStyles();
  return (
    <div className={classes.textCenter}>
      {/* <Header title="Success" /> */}
      <h1>Thank You For Your Submission</h1>
      <p>You will get an email with further instructions</p>
    </div>
  );
};
