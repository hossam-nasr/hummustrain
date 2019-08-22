import React, { useState } from "react";
import { Container, Title } from "./styles";
import Countdown from "react-countdown-now";
import Confetti from "react-dom-confetti";

const TimerOverlay = ({ done, duration, start }) => {
  const [isComplete, setIsComplete] = useState(false);
  let title = "";
  if (isComplete) {
    if (done) {
      title = "The Hummus Train has left!";
    } else {
      title = "The Hummus Train is leaving...";
    }
  } else {
    title = "The Hummus Train is about to leave!";
  }
  return (
    <Container>
      <Title>{title}</Title>
      <Confetti
        config={{
          angle: 90,
          spread: 180,
          elementCount: 100,
        }}
        active={done}
      />
      <Title>
        {!isComplete && (
          <Countdown
            date={start + duration}
            onComplete={() => {
              setIsComplete(true);
            }}
          />
        )}
      </Title>
    </Container>
  );
};

export default TimerOverlay;
