import Background from "./assets/img/hummustrain.jpg";

const theme = {
  colors: {
    mainScreenBackground: `url(${Background})`,
    addCartButtonBackground: "#000040",
    addCartButtonBackgroundDisabled: "#5c5c91",
    addCartButtonText: "#EEEEFF",
    sizeButton: "#AAAAAA",
    sizeButtonSelected: "#72cbe0",
    sizeButtonText: "#000000",
    cartName: "#000000",
    title: "#EEEEFF",
    primary: "#000000",
    sizePickerText: "#000000",
    formInputBorder: "#CCCCDD",
    formInputBorderHover: "#CCCCFF",
    formInputBorderActive: "#B0B0FF",
    progressBarBackground: "#EEEEFF",
    progressBarLeft: "#EEEEFF",
    progressBarRight: "#000040",
    overlay: "rgba(0,0,0,0.4)",
    timerText: "#EEEEEF",
  },
  shadows: {
    title: "0px 0px 40px rgba(0, 0, 0, 0.5)",
    sizePickerText: "0px 2px 7px rgba(255, 255, 255, 1)",
    colorPickerBox: "0 0 1px 1px rgba(0, 0, 0, 0.3)",
    timerText: "0px 0px 20px #2c2ca8, 0px 0px 25px #e32020",
  },
  fonts: {
    primary: "Quicksand, Lato, sans-serif",
    secondary: "Lato, Quicksand, sans-serif",
    title: "Lato, Quicksand, sans-serif",
  },
  carts: {
    sizes: { regular: ["XS", "S", "M", "L", "XL"], mobile: ["XS", "S", "M"] },
    dimensions: {
      XS: { width: 50, height: 20 },
      S: { width: 180, height: 60 },
      M: { width: 300, height: 100 },
      L: { width: 500, height: 150 },
      XL: { width: 800, height: 230 },
    },
    fontSizes: {
      XS: 9,
      S: 18,
      M: 26,
      L: 40,
      XL: 64,
    },
    margins: {
      XS: 5,
      S: 10,
      M: 20,
      L: 30,
      XL: 35,
    },
  },
};

export default theme;
