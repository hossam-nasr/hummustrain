import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: ${themeGet("colors.timerText")};
  text-shadow: ${themeGet("shadows.timerText")};
  font-size: 24px;
  font-family: ${themeGet("fonts.primary")};
  font-weight: 600;
  text-align: center;
  margin-bottom: 5px;
  @media all and (max-width: 800px) {
    font-weight: 400;
    font-size: 18px;
  }
  @media all and (max-width: 500px) {
    font-weight: 400;
    font-size: 16px;
  }
`;
