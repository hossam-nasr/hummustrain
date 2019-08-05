import React, { useState } from "react";
import {
  Container,
  Title,
  FormRow,
  Label,
  NameInput,
  BoardButton
} from "./styles";
import ColorPicker from "./components/ColorPicker";
import { defaultName, defaultColor } from "../../../../constants";

const AddCartForm = ({ onSubmit }) => {
  const [name, setName] = useState(defaultName);
  const [color, setColor] = useState(defaultColor);

  const onColorChange = color => {
    setColor(color.hex);
  };

  const onNameChange = event => {
    setName(event.target.value);
  };

  return (
    <Container>
      <Title>Board the Hummus Train!</Title>
      <FormRow>
        <Label>Name:</Label>
        <NameInput
          type="text"
          placeholder="Type your name here!"
          value={name}
          onChange={onNameChange}
        />
      </FormRow>
      <FormRow>
        <Label>Cart color:</Label>
        <ColorPicker hex={color} onChange={onColorChange} />
      </FormRow>
      <BoardButton
        onClick={() => {
          onSubmit({ name, color });
        }}
      >
        Board the Hummus train!
      </BoardButton>
    </Container>
  );
};

export default AddCartForm;
