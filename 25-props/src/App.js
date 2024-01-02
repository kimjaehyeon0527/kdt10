import './App.css';
import Book from './Book';
import Button from './Button';
import ClassComponent from './ClassComponent';
import Food from './Food';
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
      <Food food="제육 먹어보세요!"></Food>
      <Food />
      <hr />
      <Book
        title="나의 하루는 4시 40분에 시작된다."
        author="김유진"
        price="13,500원"
        type="자기계발서"
      ></Book>
      <hr />
      <Practice3 text="text 받아오기" valid={valid}></Practice3>
      <Practice3 />
    </div>
  );
}

export default App;
