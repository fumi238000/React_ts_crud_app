import { Box, ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";

import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import "./App.css";
import { HeaderLayout } from "./components/templates/HeaderLayout";
import { LoginUserProvider } from "./providers/LoginUserProvider";
import { PostProvider } from "./providers/PostProvider";

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function App() {
  return (
    <LoginUserProvider>
      <PostProvider>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <HeaderLayout>
              <Box m={16}>
                <Router />
              </Box>
            </HeaderLayout>
          </BrowserRouter>
        </ChakraProvider>
      </PostProvider>
    </LoginUserProvider>
  );
}
export default App;
