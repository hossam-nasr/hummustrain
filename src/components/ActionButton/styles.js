import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  height: 60px;
  width: 320px;
  border-radius: 7px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet("colors.addCartButtonBackground")};
  color: ${themeGet("colors.addCartButtonText")};
  border: 3px solid ${themeGet("colors.addCartButtonText")};
  cursor: pointer;
  user-select: none;
  transition: all 0.5s ease;

  :hover,
  :active,
  :focus {
    transition: all 0.5s ease;
    background-color: ${themeGet("colors.addCartButtonText")};
    color: ${themeGet("colors.addCartButtonBackground")};
  }
`;

export const Text = styled.div`
  font-size: 24px;
  text-align: center;
  font-family: ${themeGet("fonts.primary")};
`;
