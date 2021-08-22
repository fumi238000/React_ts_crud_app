import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import './App.css';

import { PostProvider } from './providers/PostProvider';

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <h1>TODOアプリ</h1>
        <Router/>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;