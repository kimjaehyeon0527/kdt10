import React, { useState } from 'react';

function Practice3() {
  const [text, setText] = useState('사라져라');
  const [display, setDisplay] = useState('block');

  const displayChange = (e) => {
    console.log(e);
    if (text === '사라져라') {
      setText('보여라');
      setDisplay('none');
    } else {
      setText('사라져라');
      setDisplay('block');
    }
  };
  return (
    <div>
      <h1 style={{ display: display }}>안녕하세요</h1>
      <button onClick={displayChange}>{text}</button>
      {/* 삼항연산자 + 단축연산 으로 가능 (True, False) */}
    </div>
  );
}

export default Practice3;
