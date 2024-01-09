import SassComponent from './SassComponent';
import CssModuleComponent from './CssModuleComponent';
import './styles/App.css';
import PostList from './PostList';
import StyledComponent from './StyledComponent';
// import Practice1 from './Practice1';
// import Practice2 from './Practice2';

function App() {
  return (
    <div className="App">
      <h1>React styling</h1>

      <h2>CSS Module</h2>
      <CssModuleComponent />
      <hr />

      <h2>SASS</h2>
      <SassComponent />

      <hr />
      {/* <Practice1 /> */}
      <hr />

      {/* <Practice2 /> */}
      <hr />
      <PostList />
      <hr />

      <h2>Styled-Components</h2>
      <StyledComponent />
    </div>
  );
}

export default App;
