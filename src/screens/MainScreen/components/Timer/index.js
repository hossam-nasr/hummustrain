import React, { useState, useCallback } from "react";
import { Container, Title } from "./styles";
import Countdown from "react-countdown-now";
import Confetti from "react-dom-confetti";

const Timer = ({ done, duration, start }) => {
  const [isComplete, setIsComplete] = useState(false);

  const getTitle = () => {
    if (isComplete) {
      if (done) {
        return "The Hummus Train has left!";
      }
      return "The Hummus Train is leaving...";
    }
    return "The Hummus Train is about to leave!";
  };

  const onComplete = useCallback(() => {
    setIsComplete(true);
  });

  return (
    <Container>
      <Title>{getTitle()}</Title>
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
          <Countdown date={start + duration} onComplete={onComplete} />
        )}
      </Title>
    </Container>
  );
};

export default Timer;
