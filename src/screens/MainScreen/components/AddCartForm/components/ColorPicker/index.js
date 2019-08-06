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

const ColorPicker = ({ hex, onChange }) => {
  const [color, setColor] = useState(hex);

  const handleChange = color => {
    onChange(color.hex);
    setColor(color.hex);
  };

  const picker = (
    <Popover id="color-popover">
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
          <ColorText color={color}>{color}</ColorText>
          <Arrow />
        </ColorCircleContainer>
      </OverlayTrigger>
    </Container>
  );
};

export default CustomPicker(ColorPicker);
