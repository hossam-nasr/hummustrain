import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  min-height: 100vh;
  flex: 1;
  background-image: ${themeGet("colors.mainScreenBackground")};
  background-size: cover;
  background-attachment: fixed;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  color: ${themeGet("colors.title")};
  font-family: ${themeGet("fonts.title")};
  font-weight: bold;
  font-size: 100px;
  text-align: center;
  text-shadow: ${themeGet("shadows.title")};
  @media all and (max-width: 800px) {
    font-weight: 400;
    font-size: 60px;
  }
  @media all and (max-width: 500px) {
    font-weight: 400;
    font-size: 32px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
