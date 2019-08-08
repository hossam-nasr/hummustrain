import React from "react";
import { Container, Text } from "./styles";

const AddCartButton = ({ onClick }) => (
  <Container onClick={onClick}>
    <Text>Board the Hummus Train!</Text>
  </Container>
);

export default AddCartButton;
