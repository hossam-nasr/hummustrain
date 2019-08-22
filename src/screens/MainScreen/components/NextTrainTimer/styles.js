import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

export const Text = styled.div`
  color: ${themeGet("colors.timerText")};
  text-shadow: ${themeGet("shadows.timerText")};
  font-size: 30px;
  font-family: ${themeGet("fonts.primary")};
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
  letter-spacing: 2px;

  @media all and (max-width: 500px) {
    font-size: 20px;
  }
`;
