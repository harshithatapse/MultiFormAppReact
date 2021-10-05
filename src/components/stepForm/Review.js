import React from "react";
import Container from "@material-ui/core/Container";
import { Accordion } from "@material-ui/core";
import { AccordionSummary } from "@material-ui/core";
import { AccordionDetails } from "@material-ui/core";
import { ListItemText } from "@material-ui/core";
import { IconButton } from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Button } from "@material-ui/core";

export const Review = ({ formData, navigation }) => {
  const { go } = navigation;
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
    <Container maxWidth="sm">
      <h3>Review</h3>
      <RenderAccordion
        summary="Names"
        go={go}
        details={[
          { "First Name": firstName },
          { "Last Name": lastName },
          { "Nick Name": nickName },
        ]}
      />
      <RenderAccordion
        summary="Address"
        go={go}
        details={[
          { Address: address },
          { City: city },
          { State: state },
          { "Zip Code": zip },
        ]}
      />
      <RenderAccordion
        summary="Contact"
        go={go}
        details={[{ "Phone Number": phone }, { "E-mail": email }]}
      />
      <Button
        color="primary"
        variant="contained"
        style={{ marginTop: "1.5rem", marginLeft: "15rem" }}
        onClick={() => go("submit")}
      >
        Submit
      </Button>
    </Container>
  );
};

export const RenderAccordion = ({ summary, details, go }) => (
  <Accordion>
    <AccordionSummary expandIcon={<ExpandMoreIcon />}>
      {summary}
    </AccordionSummary>
    <AccordionDetails>
      <div>
        {details.map((data, index) => {
          const objKey = Object.keys(data)[0];
          const objValue = data[Object.keys(data)[0]];

          return (
            <ListItemText key={index}>{`${objKey}: ${objValue}`}</ListItemText>
          );
        })}
        <IconButton
          color="primary"
          component="span"
          onClick={() => go(`${summary.toLowerCase()}`)}
        >
          <EditIcon />
        </IconButton>
      </div>
    </AccordionDetails>
  </Accordion>
);
