import React, { useState, useEffect } from "react";
import Rodal from "rodal";
import "rodal/lib/rodal.css";
import { Container, Title, ButtonContainer } from "./styles";
import Train from "./components/Train";
import AddCartButton from "./components/AddCartButton";
import SizePicker from "./components/SizePicker";
<<<<<<< HEAD
import { addCart, setupCartUpdateListener } from "../../helpers";
=======
import AddCartForm from "./components/AddCartForm";
import { addCart, onCartsUpdate } from "../../helpers";
>>>>>>> 2d792f7... added form

const MainScreen = () => {
  const [carts, setCarts] = useState([]);
  const [cartSize, setCartSize] = useState("M");
  const [modalVisible, setModalVisible] = useState(false);

  const showModal = () => {
    setModalVisible(true);
  };

  const hideModal = () => {
    setModalVisible(false);
  };

  const onButtonPress = () => {
    showModal();
  };

  const onAddCartFormSubmit = ({ name, color }) => {
    addCart({ name, color });
    hideModal();
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
        height={50}
        measure="%"
        closeOnEsc
        showMask
        visible={modalVisible}
        onClose={hideModal}
      >
        <AddCartForm onSubmit={onAddCartFormSubmit} />
      </Rodal>
    </Container>
  );
};

export default MainScreen;
