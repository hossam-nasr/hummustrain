import React from "react";
import { Container, TrainImg } from "./styles";
import { CSSTransition } from "react-transition-group";
import TrainHeadGif from "../../../../assets/img/train-head.gif";
import TrainTailGif from "../../../../assets/img/train-tail.gif";
import Cart from "./components/Cart";

const Train = ({ carts, cartSize, leaving, animationDuration }) => {
  return (
    <Container>
      <CSSTransition
        key="train-head"
        classNames="cart"
        timeout={animationDuration}
        in={!leaving}
        unmountOnExit
      >
        <TrainImg
          animationDuration={animationDuration}
          cartSize={cartSize}
          src={TrainHeadGif}
        />
      </CSSTransition>
      {carts.map(({ name, color, timestamp, facepic }) => (
        <CSSTransition
          key={timestamp}
          classNames="cart"
          timeout={animationDuration}
          in={!leaving}
          unmountOnExit
        >
          <Cart
            animationDuration={animationDuration}
            name={name}
            color={color}
            facepic={facepic}
            cartSize={cartSize}
          />
        </CSSTransition>
      ))}
      <CSSTransition
        key="train-tail"
        classNames="cart"
        timeout={animationDuration}
        in={!leaving}
        unmountOnExit
      >
        <TrainImg
          animationDuration={animationDuration}
          cartSize={cartSize}
          src={TrainTailGif}
        />
      </CSSTransition>
    </Container>
  );
};

export default Train;
