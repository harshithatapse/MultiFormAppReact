import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export const Contact = ({ formData, setForm, navigation }) => {
  const { phone, email } = formData;
  return (
    <Container maxWidth="xs">
      <h1>Contact</h1>
      <TextField
        label="Phone Number"
        name="phone"
        value={phone}
        type="number"
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="E-mail"
        name="email"
        value={email}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <div style={{ marginTop: "1rem" }}>
        <Button
          variant="contained"
          color="secondary"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.previous()}
        >
          Back
        </Button>
        <Button
          variant="contained"
          color="primary"
          style={{ marginRight: "1rem" }}
          onClick={() => navigation.next()}
        >
          Next
        </Button>
      </div>
    </Container>
  );
};
