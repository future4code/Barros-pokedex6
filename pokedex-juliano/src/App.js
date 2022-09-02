import React from "react";
import Route from "../src/route/Route";
import { GlobalState } from "./global/GlobalState";
import { ChakraProvider } from "@chakra-ui/react";
import GlobalStyles from "./globalStyle/GlobalStyles";

function App() {
  return (
    <>
      <GlobalState>
        <ChakraProvider theme={GlobalStyles}>
          <Route />
        </ChakraProvider>
      </GlobalState>
    </>
  );
}

export default App;
