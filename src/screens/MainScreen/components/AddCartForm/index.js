import React from "react";
import { Container, Title, FormRow, Label, NameInput } from "./styles";
import ColorPicker from "./components/ColorPicker";

const AddCartForm = ({ onSubmit }) => (
  <Container>
    <Title>Board the Hummus Train!</Title>
    <FormRow>
      <Label>Name:</Label>
      <NameInput type="text" placeholder="Type your name here!" />
    </FormRow>
    <FormRow>
      <Label>Cart color:</Label>
      <ColorPicker />
    </FormRow>
  </Container>
);

export default AddCartForm;
