import styled from "styled-components";
import { isMobileOnly } from "react-device-detect";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  height: ${isMobileOnly ? "" : "60px"};
  width: ${isMobileOnly ? "80vw" : "320px"};
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
  padding: 7px;
  font-size: ${isMobileOnly ? "22px" : "24px"};
  text-align: center;
  font-family: ${themeGet("fonts.primary")};
`;
