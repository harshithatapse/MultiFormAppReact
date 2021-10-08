import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Formik, Form, Field } from "formik";
import { makeStyles } from "@material-ui/core/styles";
import * as yup from "yup";

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

const validationSchema = yup.object({
  phone: yup.string().required("Phone Number is required").min(10),
  email: yup.string().email("Invalid email").required("Email is required"),
});

export const Contact = ({ formData, setFormData, nextStep, prevStep }) => {
  const classes = useStyles();
  const [direction, setDirection] = useState("back");
  return (
    <>
      <h1 style={{ marginLeft: "35rem" }}> Contact Details </h1>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          direction === "back" ? prevStep() : nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <Field
              type="number"
              name="phone"
              label="Phone Number *"
              margin="normal"
              as={TextField}
              error={touched.phone && errors.phone}
              helperText={touched.phone && errors.phone}
            />
            <Field
              type="email"
              name="email"
              label="Email *"
              margin="normal"
              as={TextField}
              error={touched.email && errors.email}
              helperText={touched.email && errors.email}
            />
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
        )}
      </Formik>
    </>
  );
};

Contact.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
