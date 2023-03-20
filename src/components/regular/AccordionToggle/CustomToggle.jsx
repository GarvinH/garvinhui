import React from "react";
import { Button, useAccordionToggle } from "react-bootstrap";

export const CustomToggle = ({ children, eventKey }) => {
  const decoratedOnClick = useAccordionToggle(eventKey);

  return (
    <Button variant="dark" onClick={decoratedOnClick}>
      {children}
    </Button>
  );
};
