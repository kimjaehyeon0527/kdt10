import React, { useState } from 'react';

function PracticeAnswer1() {
  const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [inputAlpha, setInputAlpha] = useState('');

  const [alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);

  const addAlpha = () => {
    // input 값이 빈칸일 때 alphabet2 상태가 변경되지 않도록 하기. (빈칸 추가 되지 못하게)
    if (inputAlpha.trim().length === 0) return;

    const newAlpha = alphabet2.concat({
      id: alphabet2.length + 1,
      alpha: inputAlpha,
    });

    setAlphabet2(newAlpha);
    setInputAlpha('');
  };
  const handleKeyDown = (e) => {
    console.log(e);

    // bugfix: IME 문제 해결 (한글 마지막 한글자가 더 나옴)
    if (e.nativeEvent.isComposing) return;
    if (e.code === 'Enter') addAlpha();
  };

  const deleteAlpha = (targetId) => {
    // targetId: 삭제할 요소의 id
    const newAlpha = alphabet2.filter((alpha) => {
      // 하나하나의 id가 삭제할 요소의 id와 일치하지 않으면 남아 있는다.
      return alpha.id !== targetId;
    });
    // 남아있는 id들을 보여준다.
    setAlphabet2(newAlpha);
  };

  return (
    <>
      <ol>
        {/* map */}
        {/* {alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })} */}
        {/* 한줄 일때 return과 {} 생략 가능 */}
        {/* {alphabet.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))} */}

        {alphabet2.map((value) => (
          <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
            {value.alpha}
          </li>
          //   onDoubleClick={}
        ))}
      </ol>

      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        // 실습
        // onKeyDown={}
      />
      <button onClick={addAlpha}>Add</button>
    </>
  );
}

export default PracticeAnswer1;
