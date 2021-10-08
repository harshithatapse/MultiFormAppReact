import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    margin: theme.spacing(1),
  },
}));

export const Address = ({ formData, setFormData, nextStep, prevStep }) => {
  const classes = useStyles();
  const [direction, setDirection] = useState("back");
  return (
    <>
      <h1 style={{ marginLeft: "35rem" }}> Address Details </h1>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
      >
        <Form className={classes.form}>
          <Field
            name="address"
            label="Address"
            margin="normal"
            as={TextField}
          />
          <Field name="city" label="City" margin="normal" as={TextField} />
          <Field name="state" label="State" margin="normal" as={TextField} />
          <Field name="zip" label="Zip" margin="normal" as={TextField} />
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => setDirection("back")}
            >
              Back
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
              onClick={() => setDirection("forward")}
            >
              Continue
            </Button>
          </div>
        </Form>
      </Formik>
    </>
  );
};

Address.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
  prevStep: PropTypes.func.isRequired,
};
