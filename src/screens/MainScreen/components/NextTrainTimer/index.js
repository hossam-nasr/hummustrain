import React from "react";
import { Container, Title } from "./styles";
import Countdown from "react-countdown-now";

const NextTrainTimer = ({ date }) => {
  return (
    <Container>
      <Title>The next Hummus Train leaves in</Title>
      <Title>
        <Countdown date={date} />
      </Title>
    </Container>
  );
};

export default NextTrainTimer;
