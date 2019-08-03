import React from "react";
import { Container, Name } from "./styles";
import { cartDimensions, cartFontSizes, cartMargins } from "./constants";

const Cart = ({ name, color, cartSize }) => (
  <Container
    style={{
      backgroundColor: color,
      height: cartDimensions[cartSize].height,
      width: cartDimensions[cartSize].width,
      marginLeft: cartMargins[cartSize],
      marginTop: cartMargins[cartSize]
    }}
  >
    <Name style={{ fontSize: cartFontSizes[cartSize] }}>{name}</Name>
  </Container>
);

export default Cart;
