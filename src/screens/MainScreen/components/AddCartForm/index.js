import React, { useState } from "react";
import {
  Container,
  Title,
  FormRow,
  Label,
  NameInput,
  BoardButton,
  ProgressBar
} from "./styles";
import ColorPicker from "./components/ColorPicker";
import ImagePicker from "./components/ImagePicker";
import { defaultName, defaultColor } from "../../../../constants";

const AddCartForm = ({ onSubmit, progress, uploading }) => {
  const [name, setName] = useState(defaultName);
  const [color, setColor] = useState(defaultColor);
  const [file, setFile] = useState(null);

  const onColorChange = color => {
    setColor(color.hex);
  };

  const onNameChange = event => {
    setName(event.target.value);
  };

  const onImageSave = blob => {
    setFile(blob);
  };

  const submitForm = () => {
    if (!uploading) {
      onSubmit({ name, color, file });
    }
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
        <ColorPicker color={color} onChange={onColorChange} />
      </FormRow>
      <ImagePicker onSave={onImageSave} />
      <FormRow>
        <ProgressBar value={progress} max={100} />
      </FormRow>
      <BoardButton onClick={submitForm}>Board the Hummus train!</BoardButton>
    </Container>
  );
};

export default AddCartForm;
