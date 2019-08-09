import React, { useState } from "react";
import {
  Container,
  Title,
  FormColumn,
  Label,
  NameInput,
  ProgressBar,
  FooterContainer,
  ButtonContainer
} from "./styles";
import ActionButton from "../../../../components/ActionButton";
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
      <FormColumn>
        <Label>Name:</Label>
        <NameInput
          type="text"
          placeholder="Type your name here!"
          value={name}
          onChange={onNameChange}
        />
      </FormColumn>
      <FormColumn>
        <Label>Cart color:</Label>
        <ColorPicker color={color} onChange={onColorChange} />
      </FormColumn>
      <ImagePicker onSave={onImageSave} />
      <FooterContainer>
        <ProgressBar value={progress} max={100} />
        <ButtonContainer>
          <ActionButton onClick={submitForm}>
            Board the Hummus Train!
          </ActionButton>
        </ButtonContainer>
      </FooterContainer>
    </Container>
  );
};

export default AddCartForm;
