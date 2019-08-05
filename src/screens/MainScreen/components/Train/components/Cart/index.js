import React from "react";
import { Container, Name } from "./styles";

const Cart = ({ name, color, cartSize }) => (
  <Container cartSize={cartSize} color={color}>
    <Name color={color} cartSize={cartSize}>
      {name}
    </Name>
  </Container>
);

export default Cart;
