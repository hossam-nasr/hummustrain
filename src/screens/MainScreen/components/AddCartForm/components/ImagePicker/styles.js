import styled from "styled-components";
import { themeGet } from "@styled-system/theme-get";

export const Container = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
  flex: 1;
  justify-content: space-between;
  align-items: flex-start;
  padding-top: 20px;
`;

export const FileUploadInput = styled.input`
  padding-right: 10px;
  width: 80%;
`;

export const FormColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: flex-start;
  flex: 1;
  width: 100%;
`;

export const Label = styled.div`
  color: ${themeGet("colors.primary")};
  font-family: ${themeGet("fonts.primary")};
  font-size: 20px;
  text-align: left;
  margin-bottom: 5px;
`;

export const ModalTitle = styled.div`
  text-align: center;
  font-family: ${themeGet("fonts.primary")};
  color: ${themeGet("colors.primary")};
  font-size: 24px;
  width: 100%;
`;

export const ModalBody = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const RowContainer = styled.div`
  display: flex;
  flex-flow: row nowrap;
  width: 100%;
  padding: 20px;
`;

export const PickerContainer = styled(RowContainer)`
  justify-content: center;
  align-items: center;
`;

export const RotateButton = styled.div`
  cursor: pointer;
  padding: 20px;
`;

export const ZoomLabel = styled(Label)`
  margin-right: 10px;
  font-size: 16px;
`;

export const TextInput = styled.input`
  width: 50px;
  text-align: center;
  margin-left: 10px;
  margin-right: 10px;
`;

export const ZoomSliderContainer = styled.div`
  flex: 1;
`;

export const PreviewContainer = styled.div`
  margin-top: 10px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media all and (max-width: 500px) {
    margin-top: 20px;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 10px;
`;
