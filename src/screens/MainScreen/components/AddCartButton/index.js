import React from "react";
import { Container, Text } from "./styles";

const AddCartButton = ({ onClick }) => (
  <Container onClick={onClick}>
    <Text>Click here to add a cart!</Text>
  </Container>
);

export default AddCartButton;
