import { BrowserRouter } from 'react-router-dom';
import { Router } from './router/Router';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <h1>TODOアプリ</h1>
      <Router/>
    </BrowserRouter>
  );
}

export default App;