import React, { useState } from 'react';

function Practice1() {
  const [inputName, setInputName] = useState();
  const [inputEmail, setInputEmail] = useState();
  const [result, setResult] = useState([
    {
      id: 1,
      name: '코디',
      email: 'codi@gmail.com',
    },
  ]);

  const addText = () => {
    const newText = result.concat({
      id: result.length + 1,
      name: inputName,
      email: inputEmail,
    });

    setResult(newText);
    setInputName('');
    setInputEmail('');
  };

  const enter = (e) => {
    if (e.keyCode === 13) {
      addText();
    }
  };

  const del = (e) => {
    console.log(e.target);
  };

  return (
    <>
      <input
        type="text"
        placeholder="이름"
        value={inputName}
        onChange={(e) => {
          setInputName(e.target.value);
        }}
      />
      <input
        type="text"
        placeholder="이메일"
        value={inputEmail}
        onChange={(e) => {
          setInputEmail(e.target.value);
        }}
        onKeyDown={enter}
      />
      <button onClick={addText}>등록</button>
      <div>
        {result.map((value) => (
          <div key={value.id} onDoubleClick={del}>
            {value.name}: {value.email}
          </div>
        ))}
      </div>
    </>
  );
}

export default Practice1;
