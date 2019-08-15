import React from "react";
import { StickManBody } from "../../constants";
import {
  Container,
  StickManBodyImg,
  StickManContainer,
  StickManHeadImg
} from "./styles";

const StickMan = ({ cartSize, facepic, onClick }) => (
  <Container cartSize={cartSize}>
    <StickManContainer>
      <StickManHeadImg
        onClick={onClick}
        cursorPointer={onClick ? true : false}
        src={facepic}
        cartSize={cartSize}
      />
      <StickManBodyImg src={StickManBody} cartSize={cartSize} />
    </StickManContainer>
  </Container>
);

export default StickMan;
