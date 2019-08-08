import React from "react";
import { Container, Text } from "./styles";

const ActionButton = ({ onClick, children }) => (
  <Container onClick={onClick}>
    <Text>{children}</Text>
  </Container>
);

export default ActionButton;
