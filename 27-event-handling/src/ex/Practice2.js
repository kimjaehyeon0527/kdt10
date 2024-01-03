import React, { useState } from 'react';

function Practice2() {
  // let [textcolor, changeColor] = useState({color:'black', text:'검정색'});
  // textcolor: {color:'black', text:'검정색'} 객체 형태로 초기값 저장
  const [text, setText] = useState('검정색 글씨');
  const [color, setColor] = useState('black');

  const redChange = (e) => {
    console.log(e.target);
    setText('빨간색 글씨');
    setColor('red');
  };

  const blueChange = (e) => {
    console.log(e.target);
    setText('파란색 글씨');
    setColor('blue');
  };
  return (
    <div>
      {/* <h1 style={{color: 'black'}}>검정색 글씨</h1>*/}
      {/* <h1 style={{color: textcolor.color}}>{textcolor.text}</h1> */}
      <h1 style={{ color: color }}>{text}</h1>
      <button onClick={redChange}>빨간색</button>
      <button onClick={blueChange}>파란색</button>
    </div>
  );
}
export default Practice2;

// import { useState } from "react";

// const Practice = () => {
//   let [textcolor, changeColor] = useState({ color: "black", text: "검정색" });

//   const setColor = (color, obj) => {
// obj = e.target
//     changeColor({ color: color, text: obj.innerText });
//   };

//   return (
//     <>
//       <h4 style={{ color: textcolor.color }}>{textcolor.text} 글씨</h4>
//       <button
//         onClick={(e) => {
//           setColor("red", e.target);
//         }}
//       >
//         빨간색
//       </button>
//       <button
//         onClick={(e) => {
//           setColor("blue", e.target);
//         }}
//       >
//         파란색
//       </button>
//     </>
//   );
// };

// export default Practice;
