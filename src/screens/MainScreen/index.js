import React, { useState, useEffect } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Container, Title, ButtonContainer } from "./styles";
import Train from "./components/Train";
import AddCartButton from "./components/AddCartButton";
import SizePicker from "./components/SizePicker";
import { addCart, setupCartUpdateListener, uploadFile } from "../../helpers";
import AddCartForm from "./components/AddCartForm";
import { addCart, setupCartUpdateListener } from "../../helpers";
import { loadAudio } from "../../constants";

const audio = new Audio(loadAudio);

const MainScreen = () => {
  const [carts, setCarts] = useState([]);
  const [cartSize, setCartSize] = useState("M");
  const [modalVisible, setModalVisible] = useState(false);
  const [formUploadProgress, setFormUploadProgress] = useState(0);
  const [uploading, setUploading] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
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
      <Title>ALL ABOARD THE HUMMUS TRAIN</Title>
      <SizePicker setCartSize={setCartSize} selectedSize={cartSize} />
      <Train carts={carts} cartSize={cartSize} />
      <ButtonContainer>
        <AddCartButton onClick={onButtonPress} />
      </ButtonContainer>
      <Rodal
        width={50}
        height={80}
        measure="%"
        closeOnEsc
        showMask
        visible={modalVisible}
        onClose={hideModal}
      >
        <AddCartForm
          onSubmit={onAddCartFormSubmit}
          progress={formUploadProgress}
          uploading={uploading}
        />
      </Rodal>
    </Container>
  );
};

export default MainScreen;
