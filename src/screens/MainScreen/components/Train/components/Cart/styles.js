import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  align-self: flex-end;
  user-select: none;
  background-color: ${({ color }) => color};
  height: ${({ cartSize, theme }) =>
    theme.carts.dimensions[cartSize].height + "px"};
  width: ${({ cartSize, theme }) =>
    theme.carts.dimensions[cartSize].width + "px"};
  margin-left: ${({ cartSize, theme }) => theme.carts.margins[cartSize] + "px"};
  margin-top: ${({ cartSize, theme }) => theme.carts.margins[cartSize] + "px"};
`;

export const Name = styled.div`
  color: ${themeGet("colors.cartName")};
  text-align: center;
  font-size: ${({ theme, cartSize }) => theme.carts.fontSizes[cartSize] + "px"};
  font-family: ${themeGet("fonts.primary")};
`;
