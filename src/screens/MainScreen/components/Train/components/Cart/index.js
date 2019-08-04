import React from "react";
import { Container, Name, CartContainer } from "./styles";
import StickMan from "./components/StickMan";

const Cart = ({ name, color, cartSize }) => (
  <Container cartSize={cartSize}>
    <StickMan cartSize={cartSize} />
    <CartContainer cartSize={cartSize} color={color}>
      <Name color={color} cartSize={cartSize}>
        {name}
      </Name>
    </CartContainer>
  </Container>
);

export default Cart;
