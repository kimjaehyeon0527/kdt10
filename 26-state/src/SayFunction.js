import React, { useState } from 'react'; // imrs (단축키)

function SayFunction() {
  console.log(useState('welcome!')); // 콘솔 결과값 -> ['welcome', function]
  const [message, setMessage] = useState('welcome!'); // 2번째 인자는 1번째 인자 명 앞에 set을 붙인다. count / setcount
  // message: 메세지 상태
  // setmessage(): message state 값을 바꾸는 함수

  const onClickEnter = () => {
    setMessage('안녕하세요~');
  };

  const onClickLeave = () => {
    setMessage('안녕하 가세요~');
  };

  return (
    <div>
      {/* 
            주의사항 : 괄호가 없음!
            - HTML: onclick="onclickEnter()" => 문자열 형식으로 호출문 등록한것이다.
            - JS : addEventListener('click', onclickEnter) => 괄호를 없애 함수를 바로 실행하지 않고, 클릭이 발생했을 때 함수 호출되도록
            - React : onClick={onclickEnter} => JS와 동일하다. onclickEnter() << ()로를 넣으면 안된다. 원하는 바랑 다르게 실행될 수 있음.
        */}
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>
    </div>
  );
}

export default SayFunction;
