import './App.css';
import SyntheticEvent from './SyntheticEvent';
import ClassBind from './ClassBind';
import Counter from './Counter';
import Handler from './ex/HandlerEx';
import Practice2 from './ex/Practice2';
import Practice3 from './ex/Practice3';
import Practice4 from './ex/Practice4';

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
      <hr />

      <Practice4 />
    </div>
  );
}

export default App;
