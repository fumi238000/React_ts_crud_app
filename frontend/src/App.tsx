import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import "./App.css";
import { HeaderLayout } from "./components/templates/HeaderLayout";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <HeaderLayout>
          <Box m={16}>
            <Router />
          </Box>
        </HeaderLayout>
      </BrowserRouter>
    </ChakraProvider>
  );
}
export default App;
