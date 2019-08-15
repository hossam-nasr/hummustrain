import React, { useState, useEffect } from "react";
import { Container, TrainImg } from "./styles";
import { trainLeavingAudio } from "../../../../constants";
import { CSSTransition } from "react-transition-group";
import Button from "react-bootstrap/Button";
import TrainHeadGif from "../../../../assets/img/train-head.gif";
import TrainTailGif from "../../../../assets/img/train-tail.gif";
import Cart from "./components/Cart";

const audio = new Audio(trainLeavingAudio);

const Train = ({ carts, cartSize }) => {
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    if (leaving) {
      audio.play();
    }
  }, [leaving]);

  return (
    <Container>
      <Button
        onClick={() => {
          setLeaving(!leaving);
        }}
      >
        Hi
      </Button>
      <CSSTransition
        key="train-head"
        classNames="cart"
        timeout={10000}
        in={!leaving}
        unmountOnExit
      >
        <TrainImg cartSize={cartSize} src={TrainHeadGif} />
      </CSSTransition>
      {carts.map(({ name, color, timestamp, facepic }) => (
        <CSSTransition
          key={timestamp}
          classNames="cart"
          timeout={10000}
          in={!leaving}
          unmountOnExit
        >
          <Cart
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
        timeout={10000}
        in={!leaving}
        unmountOnExit
      >
        <TrainImg cartSize={cartSize} src={TrainTailGif} />
      </CSSTransition>
    </Container>
  );
};

export default Train;
