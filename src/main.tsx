import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { Routes } from "@generouted/react-router";
// import { useState } from "react";

/*
  background: #F8F7F3
  foreground: #052659
  accent : #5483B3
  secondary : #7DA0CA
*/

const defaultTheme = extendTheme({
  colors: {
    bg: "#252022",
    fg: "#e2e1e1",
    accent: "#47bec1",
    secondary: "#d3873b",
  },
  styles: {
    global: {
      body: {
        overflowX: "hidden",
        overflowY: "scroll",
      },
    },
  },
});

// const lightAcademiaTheme = extendTheme({
//   colors: {
//     bg: "#311C19",
//     fg: "#F0F0F2",
//     accent: "#8A6248",
//     secondary: "#E5C2AC",
//   },
// });

// export const [isDarkMode, setIsDarkMode] = useState(true);

// export const toggleTheme = () => {
//   setIsDarkMode((prevMode) => !prevMode);
// };

// export const theme = extendTheme(
//   isDarkMode ? defaultTheme : lightAcademiaTheme
// );

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
