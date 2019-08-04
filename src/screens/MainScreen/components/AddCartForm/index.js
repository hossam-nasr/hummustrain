import React, { useState } from "react";
import {
  Container,
  Title,
  FormRow,
  Label,
  NameInput,
  BoardButton,
  ProgressBar,
  FileUploadInput
} from "./styles";
import ColorPicker from "./components/ColorPicker";
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

  const onFileChange = event => {
    setFile(event.target.files[0]);
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
      <FormRow>
        <Label>Face picture:</Label>
        <FileUploadInput type="file" onChange={onFileChange} />
        <img src={file && file.webkitRelativePath} />
        <ProgressBar value={progress} max={100} />
      </FormRow>

      <BoardButton
        onClick={() => {
          !uploading && onSubmit({ name, color, file });
        }}
      >
        Board the Hummus train!
      </BoardButton>
    </Container>
  );
};

export default AddCartForm;
