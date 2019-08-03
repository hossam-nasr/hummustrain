import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  height: 100px;
  width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet("colors.addCartButtonBackground")};
  cursor: pointer;
  user-select: none;
`;

export const Text = styled.div`
  color: ${themeGet("colors.addCartButtonText")};
  font-size: 32px;
  text-align: center;
  font-family: ${themeGet("fonts.primary")};
`;
