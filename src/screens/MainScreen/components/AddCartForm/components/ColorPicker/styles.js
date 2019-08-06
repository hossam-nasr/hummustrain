import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
`;

export const ColorCircleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: white;
  border-radius: 1px;
  box-shadow: 0 0 1px 1px rgba(0, 0, 0, 0.3);
  cursor: pointer;
`;

export const ColorCircle = styled.div`
  background-color: ${({ color }) => color};
  height: 20px;
  width: 20px;
  border-radius: 10px;
`;

export const Arrow = styled.i`
  border: solid black;
  border-width: 0 2px 2px 0;
  display: inline-block;
  padding: 3px;
  transform: translateY(-2px) rotate(45deg);
  -webkit-transform: translateY(-2px) rotate(45deg);
  margin-left: 10px;
  margin-right: 2px;
`;

export const ColorText = styled.div`
  font-family: ${themeGet("fonts.primary")};
  font-size: 12px;
  color: ${({ color }) => color};
  margin-left: 5px;
`;

export const PickerContainer = styled.div`
  position: absolute;
`;
