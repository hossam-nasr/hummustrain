import styled, { keyframes } from "styled-components";
import { themeGet } from "@styled-system/theme-get";
import bounceIn from "react-animations/lib/bounceIn";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
  margin-top: ${({ cartSize, theme }) => theme.carts.margins[cartSize] + "px"};
  margin-left: ${({ cartSize, theme }) => theme.carts.margins[cartSize] + "px"};
  animation: 0.7s ${keyframes`${bounceIn}`};

  &.cart-exit-active {
    transform: translateX(-100vw);
    transition: all 10s ease-in;
  }
`;

export const CartBox = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  user-select: none;
  background-color: ${({ color }) => color};
  height: ${({ cartSize, theme }) =>
    theme.carts.dimensions[cartSize].height + "px"};
  width: ${({ cartSize, theme }) =>
    theme.carts.dimensions[cartSize].width + "px"};
  border-radius: ${({ cartSize, theme }) =>
    theme.carts.dimensions[cartSize].width * 0.03 + "px"};
`;

export const CartContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  transform: translateY(
    ${({ cartSize, theme }) =>
      theme.carts.dimensions[cartSize].width * 0.1 + "px"}
  );
`;

export const Name = styled.div`
  color: ${themeGet("colors.cartName")};
  text-align: center;
  font-size: ${({ theme, cartSize }) => theme.carts.fontSizes[cartSize] + "px"};
  font-family: ${themeGet("fonts.primary")};
  max-height: 100%;
  max-width: 100%;
  padding: 5%;
  overflow: auto;
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #bbb;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #aaa;
  }

  ::-webkit-scrollbar-corner {
    background: ${({ color }) => color};
  }
`;

export const WheelImg = styled.img`
  user-select: none;
  max-height: ${({ cartSize, theme }) =>
    `${0.45 * theme.carts.dimensions[cartSize].height}px`};
  z-index: 2;
`;
