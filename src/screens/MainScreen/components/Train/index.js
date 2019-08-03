import React from "react";
import { Container, HeadImg } from "./styles";
import TrainHeadGif from "../../../../assets/img/train-head.gif";
import Cart from "./components/Cart";

const Train = ({ carts, cartSize }) => (
  <Container>
    <HeadImg cartSize={cartSize} src={TrainHeadGif} />
    {carts.map(({ id, name, color }) => (
      <Cart key={id} name={name} color={color} cartSize={cartSize} />
    ))}
  </Container>
);

export default Train;
