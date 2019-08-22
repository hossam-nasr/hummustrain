import styled, { keyframes } from "styled-components";
import slideInRight from "react-animations/lib/slideInRight";
import slideInLeft from "react-animations/lib/slideInLeft";
import slideOutRight from "react-animations/lib/slideOutRight";
import slideOutLeft from "react-animations/lib/slideOutLeft";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-shrink: 0;
`;

export const ColorCircleContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
  border: 1px solid ${themeGet("colors.formInputBorder")};
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

export const PopoverFooter = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  padding-top: 5px;
`;

const AnimationContainer = styled.div`
  &.picker-enter {
    opacity: 0;
  }
  &.picker-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }
  &.picker-exit {
    opacity: 1;
  }
  &.picker-exit-active {
    opacity: 0;
    transition: opacity 500ms;
  }
`;

export const SketchAnimationContainer = styled(AnimationContainer)`
  &.picker-enter {
    animation: 0.5s ${keyframes`${slideInRight}`};
  }
  &.picker-exit {
    animation: 0.5s ${keyframes`${slideOutRight}`};
  }
`;

export const BlockAnimationContainer = styled(AnimationContainer)`
  &.picker-enter {
    animation: 0.5s ${keyframes`${slideInLeft}`};
  }
  &.picker-exit {
    animation: 0.5s ${keyframes`${slideOutLeft}`};
  }
`;

export const PopoverContent = styled.div`
  width: 180px;
  height: 220px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

export const AbsoluteContainer = styled.div`
  position: absolute;
  overflow: hidden;
`;
