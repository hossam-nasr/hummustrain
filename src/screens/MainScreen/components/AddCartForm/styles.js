import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.div`
  color: ${themeGet("colors.primary")};
  font-family: ${themeGet("fonts.primary")};
  font-size: 32px;
  text-align: center;
  margin-bottom: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Label = styled.div`
  color: ${themeGet("colors.primary")};
  font-family: ${themeGet("fonts.primary")};
  font-size: 20px;
  text-align: left;
  margin-right: 20px;
`;

export const NameInput = styled.input`
  flex: 1;
  font-size: 26px;
  font-family: ${themeGet("fonts.primary")};
`;

export const BoardButton = styled.div`
  font-family: ${themeGet("fonts.primary")};
  color: ${themeGet("colors.primary")};
  border: 2px solid ${themeGet("colors.primary")};
  padding: 5px;
  font-size: 24px;
  cursor: pointer;
`;
