import React from "react";
import { Container, HeadImg } from "./styles";
import TrainHeadGif from "../../../../assets/img/train-head.gif";
import Cart from "./components/Cart";
import { cartDimensions } from "./components/Cart/constants";

const Train = ({ carts, cartSize }) => (
  <Container>
    <HeadImg
      src={TrainHeadGif}
      style={{
        maxHeight:
          parseInt(cartDimensions[cartSize].height) +
          0.8 * parseInt(cartDimensions[cartSize].height)
      }}
    />
    {carts.map(({ id, name, color }) => (
      <Cart key={id} name={name} color={color} cartSize={cartSize} />
    ))}
  </Container>
);

export default Train;
