import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export const Address = ({ formData, setForm, navigation }) => {
  const { address, city, state, zip, contact, email } = formData;
  return (
    <Container maxWidth="xs">
      <h1>Address</h1>
      <TextField
        label="Address"
        name="address"
        value={address}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
    </Container>
  );
};
