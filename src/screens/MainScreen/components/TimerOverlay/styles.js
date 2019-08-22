import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  background-color: ${themeGet("colors.overlay")};
  z-index: 3;
`;

export const Text = styled.div`
  color: ${themeGet("colors.timerText")};
  text-shadow: ${themeGet("shadows.timerText")};
  font-size: 80px;
  font-family: ${themeGet("fonts.primary")};
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  @media all and (max-width: 800px) {
    font-weight: 400;
    font-size: 70px;
  }
  @media all and (max-width: 500px) {
    font-weight: 400;
    font-size: 55px;
  }
`;
