import React from "react";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import MainScreen from "./screens/MainScreen";

const App = () => (
  <ThemeProvider theme={theme}>
    <MainScreen />
  </ThemeProvider>
);

export default App;
