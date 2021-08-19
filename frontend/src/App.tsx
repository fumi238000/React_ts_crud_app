import { PostIndex } from './apis/PostIndex';
import { PostCreatePage } from './components/pages/post/PostCreatePage';
import './App.css';

function App() {
  return (
    <>
      <h1>TODOアプリ</h1>
      <PostIndex/>
      <PostCreatePage/>
    </>
  );
}

export default App;