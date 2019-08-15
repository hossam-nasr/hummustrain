import React from "react";
import { isMobileOnly } from "react-device-detect";
import { Container, Label, SizeButton, SizeButtonGroup } from "./styles";
import theme from "../../../../theme";

const SizePicker = ({ selectedSize, setCartSize }) => {
  const sizes = isMobileOnly
    ? theme.carts.sizes.mobile
    : theme.carts.sizes.regular;
  return (
    <Container isMobile={isMobileOnly}>
      <Label>Train Size:</Label>
      <SizeButtonGroup>
        {sizes.map(size => (
          <SizeButton
            key={size}
            onClick={() => {
              setCartSize(size);
            }}
            selected={selectedSize === size}
          >
            {size}
          </SizeButton>
        ))}
      </SizeButtonGroup>
    </Container>
  );
};

export default SizePicker;
