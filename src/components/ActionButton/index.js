import React from "react";
import { Container, Text } from "./styles";

const ActionButton = ({ onClick, children, disabled }) => (
  <Container disabled={disabled} onClick={disabled ? () => {} : onClick}>
    <Text>{children}</Text>
  </Container>
);

export default ActionButton;
