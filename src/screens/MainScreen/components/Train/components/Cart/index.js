import React from "react";
import { StickManImg } from "../../../../../../constants";
import { Container, Name, StickMan, CartContainer } from "./styles";

const Cart = ({ name, color, cartSize }) => (
  <Container cartSize={cartSize}>
    <StickMan src={StickManImg} cartSize={cartSize} />
    <CartContainer cartSize={cartSize} color={color}>
      <Name color={color} cartSize={cartSize}>
        {name}
      </Name>
    </CartContainer>
  </Container>
);

export default Cart;
