// import React, { useState } from 'react';

import { useState } from 'react';
import Select from './Select';
import Input from './Input';
import Result from './Result';

// function Practice4() {
//   const [fruit, setFruit] = useState('peach.jpeg');
//   const [bgc, setBgc] = useState('red');
//   const [color, setColor] = useState('black');
//   const [text, setText] = useState('');

//   function Typing(e) {
//     setText(e.target.value);
//   }

//   const fruitChange = (e) => {
//     setFruit(e.target.value);
//   };

//   const bgcChange = (e) => {
//     setBgc(e.target.value);
//   };

//   const colorChange = (e) => {
//     setColor(e.target.value);
//   };
//   return (
//     <div>
//       과일:
//       <select onChange={fruitChange}>
//         <option value="peach.jpeg">복숭아</option>
//         <option value="apple.jpeg">사과</option>
//         <option value="banana.jpeg">바나나</option>
//       </select>
//       배경색:
//       <select onChange={bgcChange}>
//         <option value="red">빨강</option>
//         <option value="yellow">노랑</option>
//         <option value="blue">파랑</option>
//       </select>
//       글자색:
//       <select onChange={colorChange}>
//         <option value="black">검정</option>
//         <option value="red">빨강</option>
//         <option value="yellow">노랑</option>
//       </select>
//       <div>
//         내용: <input type="text" onChange={Typing} />
//       </div>
//       <div>
//         <img src={fruit} alt="" />
//       </div>
//       <div className="result" style={{ backgroundColor: bgc, color: color }}>
//         {text}
//       </div>
//     </div>
//   );
// }

// export default Practice4;

// ffc 단축키
function Practice4() {
  // 상태 관리
  // 한번에 관리 하는 법.
  const [data, setData] = useState({
    fruit: 'apple',
    background: 'black',
    color: 'white',
    content: 'text',
  });
  // 따로따로 관리 하는 법.
  // const [fruit, setFruit] = useState('apple');
  // const [background, setBackground] = useState('black');
  // const [color, setColor] = useState('black');
  // const [content, setContent] = useState('text');

  return (
    // 의미없는 div 대신 빈 태그 넣기 가능
    <>
      {
        // props를 넘겨줄건데, setData 함수를 넘겨줘야 state 변경이 가능.
      }
      <div>
        <Select setData={setData} />
      </div>
      <div>
        <Input setData={setData} />
      </div>
      <div>
        <Result data={data} />
      </div>
    </>
  );
}

export default Practice4;
