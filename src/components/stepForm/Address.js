import React from "react";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import { Button } from "@material-ui/core";

export const Address = ({ formData, setForm, navigation }) => {
  const { address, city, state, zip } = formData;
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
      <TextField
        label="City"
        name="city"
        value={city}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="State"
        name="state"
        value={state}
        onChange={setForm}
        margin="normal"
        variant="outlined"
        autoComplete="off"
        fullWidth
      />
      <TextField
        label="Zip Code"
        name="zip"
        type="number"
        value={zip}
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
