import React from "react";
import { StickManBody } from "../../../../../../../../constants";
import {
  Container,
  StickManBodyImg,
  StickManContainer,
  StickManHeadImg
} from "./styles";

const StickMan = ({ cartSize, facepic }) => (
  <Container cartSize={cartSize}>
    <StickManContainer>
      <StickManHeadImg src={facepic} cartSize={cartSize} />
      <StickManBodyImg src={StickManBody} cartSize={cartSize} />
    </StickManContainer>
  </Container>
);

export default StickMan;
