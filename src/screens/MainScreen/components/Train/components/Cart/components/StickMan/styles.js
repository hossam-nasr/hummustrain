import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
  justify-content: center;
`;

export const StickManBodyImg = styled.img`
  height: ${({ cartSize, theme }) =>
    theme.carts.dimensions[cartSize].height + "px"};
`;
