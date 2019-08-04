import React from "react";
import { StickManImg } from "../../../../../../../../constants";
import { Container, StickManBodyImg } from "./styles";

const StickMan = ({ cartSize }) => (
  <Container cartSize={cartSize}>
    <StickManBodyImg src={StickManImg} cartSize={cartSize} />
  </Container>
);

export default StickMan;
