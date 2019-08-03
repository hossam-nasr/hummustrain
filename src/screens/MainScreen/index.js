import React, { useState, useEffect } from "react";
import { Container, Title, ButtonContainer } from "./styles";
import Train from "./components/Train";
import AddCartButton from "./components/AddCartButton";
import SizePicker from "./components/SizePicker";
import { addCart, onCartsUpdate } from "../../helpers";

// addCart({ color: "blue", name: "Hossam" });

// getCarts(response => {
//   console.log("response:", response);
// });

// const initialCarts = [
//   {
//     id: 1,
//     name: "Hossam",
//     color: "#BBBBBB"
//   },
//   {
//     id: 2,
//     name: "Vas Geht's ab Broder",
//     color: "#FFBB00"
//   }
// ];

const MainScreen = () => {
  const [carts, setCarts] = useState([]);
  const [cartSize, setCartSize] = useState("M");

  // const addCart = cart => {
  //   setCarts([...carts, cart]);
  // };

  const onButtonPress = () => {
    addCart({ name: "Testing", color: "#0077FF" });
  };

  useEffect(() => {
    onCartsUpdate(carts => {
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
