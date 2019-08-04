import React from "react";
import { StickManBody, StickManHead } from "../../../../../../../../constants";
import {
  Container,
  StickManBodyImg,
  StickManContainer,
  StickManHeadImg
} from "./styles";

const StickMan = ({ cartSize }) => (
  <Container cartSize={cartSize}>
    <StickManContainer>
      <StickManHeadImg src={StickManHead} cartSize={cartSize} />
      <StickManBodyImg src={StickManBody} cartSize={cartSize} />
    </StickManContainer>
  </Container>
);

export default StickMan;
