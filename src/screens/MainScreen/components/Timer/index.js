import React, { useState } from "react";
import { Container, Title } from "./styles";
import Countdown from "react-countdown-now";

const Timer = ({ done, duration, start }) => {
  const [isComplete, setIsComplete] = useState(false);
  return (
    <Container>
      <Title>
        {isComplete
          ? done
            ? "The Hummus train has left!"
            : "The Hummus Train is Leaving..."
          : "The Hummus Train is about to leave!"}
      </Title>
      }
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

export default Timer;
