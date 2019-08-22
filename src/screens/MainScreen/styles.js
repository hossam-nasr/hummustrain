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
  margin-right: 10px;
  margin-left: 10px;
  @media all and (max-width: 800px) {
    font-weight: 400;
    font-size: 70px;
  }
  @media all and (max-width: 500px) {
    font-weight: 400;
    font-size: 43px;
  }
`;

export const ButtonFiller = styled.div`
  height: 100px;
  width: 100%;
`;

export const ButtonContainer = styled.div`
  position: fixed;
  bottom: 20px;
  z-index: 3;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const ModalTitle = styled.div`
  color: ${themeGet("colors.primary")};
  font-family: ${themeGet("fonts.primary")};
  font-size: 32px;
  text-align: center;
  width: 100%;

  @media all and (max-width: 500px) {
    font-size: 24px;
  }
`;
