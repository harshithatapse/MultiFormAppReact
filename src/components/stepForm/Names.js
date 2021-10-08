import React from "react";
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
  firstName: yup.string().required("First Name is required").max(20),
  lastName: yup.string().required("Last Name is required").max(20),
  nickName: yup.string().required("Nick Name is required").max(20),
});

export const Names = ({ formData, setFormData, nextStep }) => {
  const classes = useStyles();
  return (
    <>
      <h1 style={{ marginLeft: "35rem" }}> Personal Details </h1>
      <Formik
        initialValues={formData}
        onSubmit={(values) => {
          setFormData(values);
          nextStep();
        }}
        validationSchema={validationSchema}
      >
        {({ errors, touched }) => (
          <Form className={classes.form}>
            <Field
              name="firstName"
              label="First Name *"
              margin="normal"
              as={TextField}
              error={touched.firstName && errors.firstName}
              helperText={touched.firstName && errors.firstName}
            />
            <Field
              name="lastName"
              label="Last Name *"
              margin="normal"
              as={TextField}
              error={touched.lastName && errors.lastName}
              helperText={touched.lastName && errors.lastName}
            />
            <Field
              name="nickName"
              label="Nick Name *"
              margin="normal"
              as={TextField}
              error={touched.nickName && errors.nickName}
              helperText={touched.nickName && errors.nickName}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.button}
            >
              Continue
            </Button>
          </Form>
        )}
      </Formik>
    </>
  );
};

Names.propTypes = {
  formData: PropTypes.object.isRequired,
  setFormData: PropTypes.func.isRequired,
  nextStep: PropTypes.func.isRequired,
};
