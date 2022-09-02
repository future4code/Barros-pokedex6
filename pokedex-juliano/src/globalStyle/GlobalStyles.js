import { extendTheme } from "@chakra-ui/react";

const GlobalStyles = extendTheme({
  styles: {
    global: {
      body: {
        bg: "rgb(238, 215, 75)",
      },
    },
  },
});

export default GlobalStyles;
