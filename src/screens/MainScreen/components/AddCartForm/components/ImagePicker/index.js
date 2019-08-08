import React, { useState, useRef } from "react";
import {
  Container,
  FormColumn,
  Label,
  FileUploadInput,
  ModalTitle,
  ModalBody,
  ZoomContainer,
  ZoomLabel,
  ZoomText,
  ZoomSliderContainer,
  PreviewContainer,
  ButtonContainer
} from "./styles";
import AvatarEditor from "react-avatar-editor";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Slider } from "@material-ui/core";
import StickMan from "../../../../../../components/StickMan";

const ImagePicker = ({ onSave }) => {
  const [file, setFile] = useState(null);
  const [imgCroppedSrc, setImgCroppedSrc] = useState(null);
  const [imgCroppedBlob, setImgCroppedBlob] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const editor = useRef(null);

  const onFileChange = event => {
    setFile(event.target.files[0]);
    showModal();
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const showModal = () => {
    setModalVisible(true);
  };

  const onModalHide = () => {
    setModalVisible(false);
  };

  const onEditorClickSave = () => {
    if (editor) {
      const canvas = editor.current.getImage().toDataURL();
      setImgCroppedSrc(canvas);
      fetch(canvas).then(res => {
        res.blob().then(blob => {
          setImgCroppedBlob(blob);
          onSave(blob);
          hideModal();
        });
      });
    }
  };

  const onEditorCancel = () => {
    hideModal();
  };

  const onZoomTextChange = event => {
    const scale = parseFloat(event.target.value);
    if (isNaN(scale)) {
      setScale(0);
    } else if (scale < 0) {
      setScale(0);
    } else if (scale > 10) {
      setScale(10);
    } else {
      setScale(scale);
    }
  };

  const onModifyButtonClick = () => {
    showModal();
  };

  return (
    <Container>
      <FormColumn>
        <Label>Face picture:</Label>
        <FileUploadInput type="file" onChange={onFileChange} />
      </FormColumn>
      <PreviewContainer>
        <>
          {imgCroppedSrc && <StickMan cartSize="L" facepic={imgCroppedSrc} />}
          {imgCroppedBlob && (
            <ButtonContainer>
              <Button onClick={onModifyButtonClick} variant="info">
                Modify
              </Button>
            </ButtonContainer>
          )}
        </>
      </PreviewContainer>
      <Modal centered show={modalVisible} onHide={onModalHide}>
        <Modal.Header closeButton>
          <ModalTitle>Crop your image to fit your face!</ModalTitle>
        </Modal.Header>
        <ModalBody>
          <AvatarEditor
            ref={editor}
            image={file}
            width={200}
            height={267}
            borderRadius={134}
            border={50}
            color={[255, 255, 255, 0.7]}
            scale={scale}
          />
          <ZoomContainer>
            <ZoomLabel>Zoom level:</ZoomLabel>
            <ZoomSliderContainer>
              <Slider
                value={scale}
                min={1}
                max={10}
                step={0.05}
                onChange={(event, scale) => {
                  setScale(scale);
                }}
              />
            </ZoomSliderContainer>
            <ZoomText
              type="number"
              min={1}
              max={10}
              step={0.1}
              value={scale}
              onChange={onZoomTextChange}
            />
          </ZoomContainer>
        </ModalBody>
        <Modal.Footer>
          <Button variant="danger" onClick={onEditorCancel}>
            Cancel
          </Button>
          <Button variant="success" onClick={onEditorClickSave}>
            Save Image
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ImagePicker;
