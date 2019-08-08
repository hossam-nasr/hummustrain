import React from "react";
import { Container, Name, CartContainer, CartBox, WheelImg } from "./styles";
import StickMan from "../../../../../../components/StickMan";
import TrainWheelGif from "../../../../../../assets/img/train-wheels.gif";

const Cart = ({ name, color, cartSize, facepic }) => (
  <Container cartSize={cartSize}>
    <CartContainer cartSize={cartSize}>
      <StickMan cartSize={cartSize} facepic={facepic} />
      <CartBox cartSize={cartSize} color={color}>
        <Name color={color} cartSize={cartSize}>
          {name}
        </Name>
      </CartBox>
    </CartContainer>
    <WheelImg cartSize={cartSize} src={TrainWheelGif} />
  </Container>
);

export default Cart;
