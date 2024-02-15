import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes } from "@generouted/react-router";

/*
  background: #F8F7F3
  foreground: #052659
  accent : #5483B3
  secondary : #7DA0CA
*/

const theme = extendTheme({
  colors: {
    bg: "#252022",
    fg: "#e2e1e1",
    accent: "#47bec1",
    secondary: "#d3873b",
  },
  styles: {
    global: {
      body: {
        overflowX: "hidden", // Hide horizontal scrollbar
        overflowY: "scroll",
      },
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
