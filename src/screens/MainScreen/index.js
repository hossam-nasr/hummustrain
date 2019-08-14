import React, { useState, useEffect } from "react";
import { isMobileOnly } from "react-device-detect";
import { Modal } from "react-bootstrap";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import {
  Container,
  Title,
  ButtonContainer,
  HeaderContainer,
  ButtonFiller,
  ModalTitle
} from "./styles";
import ActionButton from "../../components/ActionButton";
import Train from "./components/Train";
import SizePicker from "./components/SizePicker";
import AddCartForm from "./components/AddCartForm";
import { addCart, setupCartUpdateListener } from "../../helpers";
import { loadAudio, defaultSize } from "../../constants";
const moment = require("moment");

const audio = new Audio(loadAudio);

const isHummusThursday = moment().isoWeekday() === 3;

const MainScreen = () => {
  const [carts, setCarts] = useState([]);
  const [cartSize, setCartSize] = useState(
    isMobileOnly ? defaultSize.mobile : defaultSize.regular
  );
  const [modalVisible, setModalVisible] = useState(false);
  const [formUploadProgress, setFormUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const { width, height } = useWindowSize();

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
    audio.pause();
    audio.currentTime = 0;
  };

  const onButtonPress = () => {
    audio.play();
    showModal();
  };

  const onFormProgress = snapshot => {
    const percentageComplete =
      (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    setFormUploadProgress(percentageComplete);
  };

  const onFormComplete = () => {
    hideModal();
    setUploading(false);
    setFormUploadProgress(0);
  };

  const onAddCartFormSubmit = ({ name, color, file }) => {
    setUploading(true);
    addCart({
      name,
      color,
      file,
      onUploadProgress: onFormProgress,
      onComplete: onFormComplete
    });
  };

  useEffect(() => {
    setupCartUpdateListener(carts => {
      setCarts(carts);
    });
  }, []);

  return (
    <Container>
      {isHummusThursday && <Confetti width={width} height={height} />}
      <HeaderContainer>
        <Title>
          {isHummusThursday
            ? "IT'S HUMMUS THURSDAY!"
            : "ALL ABOARD THE HUMMUS TRAIN"}
        </Title>
        <SizePicker setCartSize={setCartSize} selectedSize={cartSize} />
      </HeaderContainer>
      <Train carts={carts} cartSize={cartSize} />
      <ButtonFiller />
      <ButtonContainer>
        <ActionButton onClick={onButtonPress}>
          Board the Hummus Train!
        </ActionButton>
      </ButtonContainer>
      <Modal
        centered
        scrollable
        size="lg"
        show={modalVisible}
        onHide={hideModal}
      >
        <Modal.Header closeButton>
          <ModalTitle>Board the Hummus Train!</ModalTitle>
        </Modal.Header>
        {// manually unmount the form to reset state on close
        modalVisible && (
          <AddCartForm
            onSubmit={onAddCartFormSubmit}
            progress={formUploadProgress}
            uploading={uploading}
          />
        )}
      </Modal>
    </Container>
  );
};

export default MainScreen;
