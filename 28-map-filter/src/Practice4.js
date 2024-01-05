import React, { useState } from 'react';
// import { useRef } from 'react';

function Practice4() {
  const [inputName, setInputName] = useState('');
  const [inputContent, setInputContent] = useState('');
  const [result, setResult] = useState([]);
  const [showAllTable, setShowAllTable] = useState(false);

  // ref 실습 + 해설
  // const writeRef = useRef();
  // const titleRef = useRef();

  // const handleFocus = () => {
  //   if (writeRef.current.value === '') {
  //     writeRef.current.focus();
  //   } else if (titleRef.current.value === '') {
  //     titleRef.current.focus();
  //   }
  //   addText();
  // };

  const addText = () => {
    // if (writeRef.current.value === '' || titleRef.current.value === '') return;
    // if (writeRef.current.value === '') return writeRef.current.focus();
    // if (titleRef.current.value === '') return titleRef.current.focus();
    if (inputName.trim().length === 0 || inputContent.trim().length === 0)
      return;
    const newText = result.concat({
      id: result.length + 1,
      name: inputName,
      inputContent: inputContent,
    });

    setResult(newText);
    setInputName('');
    setInputContent('');
  };

  const enter = (e) => {
    if (e.keyCode === 13) {
      addText();
    }
  };

  const all = (e) => {
    setShowAllTable(true);
  };
  return (
    <>
      <div className="container">
        작성자:
        <input
          type="text"
          placeholder="작성자"
          value={inputName}
          onChange={(e) => {
            setInputName(e.target.value);
          }}
          // ref={writeRef}
        />
        제목:
        <input
          type="text"
          placeholder="내용"
          value={inputContent}
          onChange={(e) => {
            setInputContent(e.target.value);
          }}
          onKeyDown={enter}
          // ref={titleRef}
        />
        <button onClick={addText}>작성</button>
      </div>
      <div className="smlcontainer">
        <select name="" id="">
          <option value="">작성자</option>
          <option value="">내용</option>
        </select>
        <input type="text" placeholder="검색어" />
        <button>검색</button>
        <button onClick={all}>전체</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>작성자</th>
          </tr>
        </thead>
        <tbody>
          {result.map((value) => (
            <tr key={value.id}>
              <td>{value.id}</td>
              <td>{value.name}</td>
              <td>{value.inputContent}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {showAllTable && <table></table>}
    </>
  );
}

export default Practice4;
