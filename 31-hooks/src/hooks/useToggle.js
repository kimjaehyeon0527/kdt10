import { useState } from 'react';

// useToggle 이라는 함수로 보기.
function useToggle(initValue = false) {
  // value: 토글의 상태
  // setValue: 토글 상태를 변화시키는 setter
  const [value, setValue] = useState(initValue); // 여기에 false 값을 넣으면 한 없이 false.

  const toggleValue = () => {
    setValue(!value);
  };

  return [value, toggleValue]; // return으로 반환 해줘야 Faq.js 에서 받아서 사용할 수 있다.
}

export default useToggle;
