import SassComponent from './SassComponent';
import CssModuleComponent from './CssModuleComponent';
import './styles/App.css';
import Practice1 from './Practice1';

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
      <Practice1 />
    </div>
  );
}

export default App;
