import './App.css';
import Practice2 from './Practice2';
import Button from './Button';
import ClassComponent from './ClassComponent';
import Practice1 from './Practice1';
import FuncComponent from './FuncComponent';
import Practice3 from './Practice3';

function valid() {
  console.log('콘솔 띄우기 성공!');
}

function App() {
  return (
    <div className="App">
      <FuncComponent name="코딩온" />
      {/* 기본값 설정 props 없을 때 */}
      <FuncComponent />
      <hr />
      <Button link="https://www.google.com">Google</Button>
      <hr />
      <ClassComponent name="코딩온" />
      <ClassComponent />
      <hr />
      <Practice1 food="제육 먹어보세요!"></Practice1>
      <Practice1 />
      <hr />
      <Practice2
        title="나의 하루는 4시 40분에 시작된다."
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></Practice2>
      <hr />
      <Practice3 text="text 받아오기" valid={valid}></Practice3>
      <Practice3 />
    </div>
  );
}

export default App;
