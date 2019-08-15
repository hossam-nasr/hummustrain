import styled, { keyframes } from "styled-components";
import { TransitionGroup } from "react-transition-group";
import bounceIn from "react-animations/lib/bounceIn";

export const Container = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  align-items: flex-end;
`;

export const TrainImg = styled.img`
  user-select: none;
  margin-left: ${({ cartSize, theme }) => theme.carts.margins[cartSize] + "px"};
  max-height: ${({ cartSize, theme }) =>
    `${2.3 * theme.carts.dimensions[cartSize].height}px`};
  margin-left: ${({ cartSize, theme }) => theme.carts.margins[cartSize] + "px"};

  &.cart-enter {
    animation: 0.7s ${keyframes`${bounceIn}`};
  }

  &.cart-exit-active {
    transform: translateX(-100vw);
    transition: ${({ animationDuration }) =>
      `all ${animationDuration}ms ease-in`};
  }
`;
