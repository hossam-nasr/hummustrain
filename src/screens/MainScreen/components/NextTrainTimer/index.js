import React from "react";
import { Container, Text } from "./styles";
import Countdown from "react-countdown-now";

const NextTrainTimer = ({ time }) => {
  return (
    <Container>
      <Text>The next Hummus Train leaves in</Text>
      <Text>
        <Countdown date={time} />
      </Text>
    </Container>
  );
};

export default NextTrainTimer;
