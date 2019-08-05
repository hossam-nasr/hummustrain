import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const HeadImg = styled.img`
  height: 50px;
  width: 50px;
  border-radius: 25px;
`;

export const BodyImg = styled.img`
  height: 150px;
`;
