import React, { useState } from "react";
import { Container, Text } from "./styles";
import Countdown from "react-countdown-now";
import Confetti from "react-dom-confetti";

const TimerOverlay = ({ done, duration, start }) => {
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
  return (
    <Container>
      <Text>{getTitle()}</Text>
      <Confetti
        config={{
          angle: 90,
          spread: 180,
          elementCount: 100,
        }}
        active={done}
      />
      <Text>
        {!isComplete && (
          <Countdown
            date={start + duration}
            onComplete={() => {
              setIsComplete(true);
            }}
          />
        )}
      </Text>
    </Container>
  );
};

export default TimerOverlay;
