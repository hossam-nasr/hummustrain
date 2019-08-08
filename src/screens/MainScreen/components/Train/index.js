import React from "react";
import { Container, TrainImg } from "./styles";
import TrainHeadGif from "../../../../assets/img/train-head.gif";
import TrainTailGif from "../../../../assets/img/train-tail.gif";
import Cart from "./components/Cart";

const Train = ({ carts, cartSize }) => (
  <Container>
    <TrainImg cartSize={cartSize} src={TrainHeadGif} />
    {carts.map(({ name, color, timestamp, facepic }) => (
      <Cart
        key={timestamp}
        name={name}
        color={color}
        facepic={facepic}
        cartSize={cartSize}
      />
    ))}
    <TrainImg cartSize={cartSize} src={TrainTailGif} />
  </Container>
);

export default Train;
