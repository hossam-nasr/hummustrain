import React, { useState, useRef } from "react";
import {
  Container,
  ColorCircleContainer,
  ColorCircle,
  ColorText,
  Arrow,
  PopoverFooter
} from "./styles";
import { presetColorOptions } from "../../../../../../constants";
import { CustomPicker, BlockPicker, SketchPicker } from "react-color";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Popover from "react-bootstrap/Popover";
import Button from "react-bootstrap/Button";

const ColorPicker = ({ hex, onChange }) => {
  const [color, setColor] = useState(hex);
  const [isDetailed, setIsDetailed] = useState(false);
  const overlayRef = useRef(null);

  const handleChange = color => {
    onChange(color.hex);
    setColor(color.hex);
  };

  const showDetails = () => {
    setIsDetailed(true);
  };

  const hideDetails = () => {
    setIsDetailed(false);
  };

  const hidePopover = () => {
    if (overlayRef.current) {
      overlayRef.current.hide();
    }
  };

  const onDoneClick = () => {
    hidePopover();
    hideDetails();
  };

  const onPopoverHide = () => {};

  const sketchPicker = (
    <SketchPicker
      color={color}
      onChange={handleChange}
      disableAlpha
      presetColors={[]}
    />
  );

  const blockPicker = (
    <BlockPicker
      colors={presetColorOptions}
      triangle="hide"
      color={color}
      onChange={handleChange}
    />
  );

  const picker = (
    <Popover id="color-popover">
      <Popover.Title>Pick a color!</Popover.Title>
      <Popover.Content>
        {isDetailed ? sketchPicker : blockPicker}
      </Popover.Content>
      <PopoverFooter>
        {isDetailed ? (
          <Button size="sm" variant="outline-info" onClick={hideDetails}>
            Back
          </Button>
        ) : (
          <Button size="sm" variant="outline-info" onClick={showDetails}>
            More colors
          </Button>
        )}
        <Button size="sm" variant="success" onClick={onDoneClick}>
          Done
        </Button>
      </PopoverFooter>
    </Popover>
  );

  return (
    <Container>
      <OverlayTrigger
        ref={overlayRef}
        trigger="click"
        placement="bottom"
        overlay={picker}
        onHide={onPopoverHide}
        rootClose
        popperConfig={{
          modifiers: {
            preventOverflow: { enabled: true, boundariesElement: "viewport" }
          }
        }}
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
