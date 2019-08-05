import React from "react";
import { Container, HeadImg, BodyImg } from "./styles";
import { StickManBody } from "../../../../../../../../constants";

const StickManPreview = ({ headSrc }) => {
  return (
    <Container>
      <HeadImg src={headSrc} alt="Preview Head" />
      <BodyImg src={StickManBody} alt="Preview Body" />
    </Container>
  );
};

export default StickManPreview;
