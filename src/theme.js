import Background from "./assets/img/hummustrain.jpg";

const theme = {
  colors: {
    mainScreenBackground: `url(${Background})`,
    addCartButtonBackground: "#000040",
    addCartButtonText: "#EEEEFF",
    sizeButton: "#AAAAAA",
    sizeButtonSelected: "#4dc947",
    sizeButtonText: "#000000",
    cartName: "#000000",
    title: "#EEEEFF",
    primary: "#000000",
    sizePickerText: "#000000"
  },
  shadows: {
    title: "0px 0px 40px rgba(0, 0, 0, 0.5)",
    sizePickerText: "0px 2px 7px rgba(255, 255, 255, 1)"
  },
  fonts: {
    primary: "Quicksand, Lato, sans-serif",
    secondary: "Lato, Quicksand, sans-serif",
    title: "Lato, Quicksand, sans-serif"
  },
  carts: {
    sizes: ["XS", "S", "M", "L", "XL"],
    dimensions: {
      XS: { width: 50, height: 20 },
      S: { width: 180, height: 60 },
      M: { width: 300, height: 100 },
      L: { width: 500, height: 150 },
      XL: { width: 800, height: 230 }
    },
    fontSizes: {
      XS: 9,
      S: 18,
      M: 26,
      L: 40,
      XL: 64
    },
    margins: {
      XS: 5,
      S: 10,
      M: 20,
      L: 30,
      XL: 35
    }
  }
};

export default theme;
