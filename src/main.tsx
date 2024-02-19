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
// const ThemeContext = createContext();

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
// const darkAcademiaTheme = extendTheme({
//   colors: {
//     bg: "#252022",
//     fg: "#e2e1e1",
//     accent: "#47bec1",
//     secondary: "#d3873b",
//   },
// });

// const ThemeProvider = ({ children }) => {
//   const [theme, setTheme] = useState(defaultTheme);

//   const toggleTheme = (newTheme) => {
//     setTheme(newTheme);
//   };

//   return (
//     <ThemeContext.Provider value={{ theme, toggleTheme }}>
//       {children}
//     </ThemeContext.Provider>
//   );
// };

// // Create a custom hook to consume theme context
// const useThemeContext = () => useContext(ThemeContext);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={defaultTheme}>
      <Routes />
    </ChakraProvider>
  </React.StrictMode>
);
