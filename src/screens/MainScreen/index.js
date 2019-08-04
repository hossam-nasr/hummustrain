import React, { useState, useEffect } from "react";
import { Container, Title, ButtonContainer } from "./styles";
import Train from "./components/Train";
import AddCartButton from "./components/AddCartButton";
import SizePicker from "./components/SizePicker";
import { addCart, setupCartUpdateListener } from "../../helpers";

const MainScreen = () => {
  const [carts, setCarts] = useState([]);
  const [cartSize, setCartSize] = useState("M");

  const onButtonPress = () => {
    addCart({ name: "Testing", color: "#0077FF" });
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
    </Container>
  );
};

export default MainScreen;
