import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  flex-flow: column nowrap;
  padding: 0px 20px 20px 20px;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: min-content; /* TODO: add browser prefixes */
`;

export const FormColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  flex: 1;
  flex-shrink: 0;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 20px;
`;

export const Label = styled.div`
  color: ${themeGet("colors.primary")};
  font-family: ${themeGet("fonts.primary")};
  font-size: 20px;
  text-align: left;
  margin-bottom: 5px;
`;

export const NameInput = styled.input`
  width: 100%;
  flex: 1;
  font-size: 18px;
  border-radius: 5px;
  border: 1px solid ${themeGet("colors.formInputBorder")};
  padding: 5px;
  padding-left: 10px;
  font-family: ${themeGet("fonts.primary")};

  transition: 0.5s all ease;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    outline: none;
  }

  &:hover {
    border-color: ${themeGet("colors.formInputBorderHover")};
  }

  &:active,
  &:focus {
    border-color: ${themeGet("colors.formInputBorderActive")};
  }
`;

export const BoardButton = styled.div`
  font-family: ${themeGet("fonts.primary")};
  color: ${themeGet("colors.primary")};
  border: 2px solid ${themeGet("colors.primary")};
  padding: 5px;
  font-size: 24px;
  margin-top: 20px;
  cursor: pointer;
`;

export const ProgressBar = styled.progress`
  -webkit-appearance: none;
  appearance: none;
  flex: 1;
  width: 100%;
  height: 13px;
  color: ${themeGet("colors.progressBarRight")};

  ::-webkit-progress-bar {
    border-radius: 5px;
    background-color: ${themeGet("colors.progressBarBackground")};
    border: 1px solid ${themeGet("colors.formInputBorder")};
  }
  ::-webkit-progress-value {
    background-image: -webkit-linear-gradient(
      left,
      ${themeGet("colors.progressBarLeft")},
      ${themeGet("colors.progressBarRight")}
    );
    border-radius: 5px;
  }

  ::-moz-progress-bar {
    background-image: -moz-linear-gradient(
      left,
      ${themeGet("colors.progressBarLeft")},
      ${themeGet("colors.progressBarRight")}
    );
    border-radius: 5px;
    border: 1px solid ${themeGet("colors.formInputBorder")};
  }
`;

export const FooterContainer = styled(FormColumn)`
  margin-top: 10px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  @media all and (max-width: 500px) {
    margin-top: 0px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
`;
