import Background from "./assets/img/hummustrain.jpg";

const theme = {
  colors: {
    mainScreenBackground: `url(${Background})`,
    addCartButtonBackground: "black",
    addCartButtonText: "white",
    sizeButton: "gray",
    sizeButtonSelected: "dodgerBlue",
    sizeButtonText: "black",
    cartName: "black",
    title: "white"
  },
  fonts: {
    primary: "sans-serif",
    secondary: "sans-serif",
    title: "sans-serif"
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
