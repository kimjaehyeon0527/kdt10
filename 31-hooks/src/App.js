import Faq from './Faq';
import Form from './Form';
import Practice1 from './Practice1';
import UseCallbackEx from './UseCallbackEx';
import UseCallbackEx2 from './UseCallbackEx2';
import UseMemoEx from './UseMemoEx';
import UseReducseEx from './UseReducerEx';

function App() {
  return (
    <div className="App">
      <UseMemoEx />
      <hr />
      <UseCallbackEx />
      <hr />
      <UseCallbackEx2 postId={9} />
      <hr />
      <UseReducseEx />
      <hr />
      <Faq />
      <hr />
      <Form />
      <hr />
      <Practice1 />
    </div>
  );
}

export default App;
