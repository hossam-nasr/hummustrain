import React, { useState, useRef } from "react";
import { isMobileOnly } from "react-device-detect";
import {
  Container,
  FormColumn,
  Label,
  FileUploadInput,
  ModalTitle,
  ModalBody,
  RowContainer,
  PickerContainer,
  ZoomLabel,
  TextInput,
  ZoomSliderContainer,
  PreviewContainer,
  ButtonContainer,
  RotateButton
} from "./styles";
import AvatarEditor from "react-avatar-editor";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Slider } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo, faRedo } from "@fortawesome/free-solid-svg-icons";
import StickMan from "../../../../../../components/StickMan";

const ImagePicker = ({ onSave }) => {
  const [file, setFile] = useState(null);
  const [isNewFile, setIsNewFile] = useState(true);
  const [imgCroppedSrc, setImgCroppedSrc] = useState(null);
  const [imgCroppedBlob, setImgCroppedBlob] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [scale, setScale] = useState(1);
  const [rotation, setRotation] = useState(0);
  const [savedScale, setSavedScale] = useState(1);
  const [savedRotation, setSavedRotation] = useState(0);
  const editor = useRef(null);

  const onFileChange = event => {
    if (event.target.files[0]) {
      if (file && file.name !== event.target.files[0].name) {
        setIsNewFile(true);
      }
      setFile(event.target.files[0]);
      // reset crop
      setRotation(0);
      setScale(1);
      setSavedRotation(0);
      setSavedScale(1);
      showModal();
    }
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

  const onEditorClickSave = async () => {
    if (editor) {
      const canvas = editor.current.getImage().toDataURL();
      setImgCroppedSrc(canvas);
      setSavedRotation(rotation);
      setSavedScale(scale);
      setIsNewFile(false);
      const res = await fetch(canvas);
      const blob = await res.blob();
      setImgCroppedBlob(blob);
      onSave(blob);
      hideModal();
    }
  };

  const onEditorCancel = () => {
    // if it's a new file, set it without cropping
    if (file && isNewFile) {
      // set blob
      setImgCroppedBlob(file);
      onSave(file);

      // set src
      const reader = new FileReader();
      reader.onload = e => {
        setImgCroppedSrc(e.target.result);
      };
      reader.readAsDataURL(file);
    }
    // no longer a new file
    if (isNewFile) {
      setIsNewFile(false);
    }
    // return to the old saved crop
    setScale(savedScale);
    setRotation(savedRotation);
    hideModal();
  };

  const onTextChange = (min, max, event, setter) => {
    const val = parseFloat(event.target.value);
    if (isNaN(val)) {
      setter(min);
    } else if (val < min) {
      setter(min);
    } else if (val > max) {
      setter(max);
    } else {
      setter(val);
    }
  };

  const onZoomTextChange = event => {
    onTextChange(0, 10, event, setScale);
  };

  const onRotationTextChange = event => {
    onTextChange(0, 360, event, setRotation);
  };

  const rotateRight = () => {
    setRotation((rotation + 90) % 360);
  };

  const rotateLeft = () => {
    setRotation((rotation + 270) % 360);
  };

  const onModifyButtonClick = () => {
    showModal();
  };

  return (
    <Container>
      <FormColumn>
        <Label>Face picture:</Label>
        <FileUploadInput
          type="file"
          onChange={onFileChange}
          accept="image/*"
          multiple={false}
        />
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
      <Modal centered scrollable show={modalVisible} onHide={onModalHide}>
        <Modal.Header closeButton>
          <ModalTitle>Crop your image to fit your face!</ModalTitle>
        </Modal.Header>
        <ModalBody>
          <PickerContainer>
            <RotateButton onClick={rotateRight}>
              <FontAwesomeIcon icon={faRedo} />
            </RotateButton>
            <AvatarEditor
              ref={editor}
              image={file}
              width={
                rotation === 0 || rotation === 180 || rotation === 360
                  ? 200
                  : 267
              }
              height={
                rotation === 0 || rotation === 180 || rotation === 360
                  ? 267
                  : 200
              }
              borderRadius={134}
              border={isMobileOnly ? 20 : 50}
              color={[255, 255, 255, 0.7]}
              scale={scale}
              rotate={rotation}
            />
            <RotateButton onClick={rotateLeft}>
              <FontAwesomeIcon icon={faUndo} />
            </RotateButton>
          </PickerContainer>
          <RowContainer>
            <Label>Rotation degree:</Label>
            <TextInput
              type="number"
              min={0}
              max={360}
              step={1}
              placeholder={0}
              value={rotation === 0 ? "" : rotation}
              onChange={onRotationTextChange}
            />
            <Label>°</Label>
          </RowContainer>
          <RowContainer>
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
            <TextInput
              type="number"
              min={1}
              max={10}
              step={0.1}
              value={scale === 0 ? "" : scale}
              onChange={onZoomTextChange}
            />
          </RowContainer>
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
