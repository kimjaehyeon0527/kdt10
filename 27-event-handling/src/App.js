import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Handler from './ex/HandlerEx';
import Practice2 from './ex/Practice2';
import Practice3 from './ex/Practice3';

function App() {
  return (
    <div className="App">
      <SyntheticEvent />
      <hr />

      <ClassBind />
      <hr />

      <Counter />
      <hr />

      <Handler />
      <hr />

      <Practice2 />
      <hr />

      <Practice3 />
    </div>
  );
}

export default App;
