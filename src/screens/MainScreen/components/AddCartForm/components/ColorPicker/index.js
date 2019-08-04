import React, { useState } from "react";
import {
  Container,
  ColorCircleContainer,
  ColorCircle,
  ColorText,
  Arrow
} from "./styles";
import { CustomPicker, BlockPicker } from "react-color";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";

const ColorPicker = ({ hex, rgb, hsl, onChange }) => {
  const [pickerVisible, setPickerVisible] = useState(false);
  const [color, setColor] = useState(hex);

  const handleClick = () => {
    setPickerVisible(!pickerVisible);
  };

  const handleClose = () => {
    setPickerVisible(false);
  };

  const handleChange = color => {
    setColor(color.hex);
  };

  const picker = (
    <Popover>
      <Popover.Title>Pick a color!</Popover.Title>
      <BlockPicker triangle="hide" color={color} onChange={handleChange} />
    </Popover>
  );

  return (
    <Container>
      <OverlayTrigger
        trigger="click"
        placement="bottom"
        overlay={picker}
        onHide={() => {}}
        rootClose
      >
        <ColorCircleContainer>
          <ColorCircle color={color} />
          <ColorText>{color}</ColorText>
          <Arrow />
        </ColorCircleContainer>
      </OverlayTrigger>
    </Container>
  );
};

export default CustomPicker(ColorPicker);
