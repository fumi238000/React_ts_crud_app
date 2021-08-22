import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import './App.css';

import { PostProvider } from './providers/PostProvider';

function App() {
  return (
    <ChakraProvider>
    <PostProvider>
      <BrowserRouter>
        <h1>TODOアプリ</h1>
        <Router/>
      </BrowserRouter>
    </PostProvider>
    </ChakraProvider>
  );
}

export default App;