import React from "react";
import { Container, Label, SizeButton, SizeButtonGroup } from "./styles";
import theme from "../../../../theme";

const SizePicker = ({ selectedSize, setCartSize }) => (
  <Container>
    <Label>Train Size:</Label>
    <SizeButtonGroup>
      {theme.carts.sizes.map(size => (
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

export default SizePicker;
