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
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: ${themeGet("colors.title")};
  font-family: ${themeGet("fonts.title")};
  font-size: 100px;
  text-align: center;
`;

export const ButtonContainer = styled.div`
  margin-top: 20px;
`;
