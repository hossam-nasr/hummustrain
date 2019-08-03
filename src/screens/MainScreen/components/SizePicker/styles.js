import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-self: flex-end;
  margin-right: 50px;
  justify-content: center;
  align-items: flex-end;
`;

export const Label = styled.div`
  color: black;
  font-family: ${themeGet("fonts.secondary")};
  font-size: 22px;
  margin-right: 10px;
`;

export const SizeButton = styled.div`
  cursor: pointer;
  user-select: none;
  background-color: ${({ selected }) =>
    selected
      ? themeGet("colors.sizeButtonSelected")
      : themeGet("colors.sizeButton")};
  color: ${themeGet("colors.sizeButtonText")};
  height: 35px;
  width: 35px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  font-family: ${themeGet("fonts.secondary")};
`;

export const SizeButtonGroup = styled.div`
  display: flex;
  flex-flow: row nowrap;
`;
