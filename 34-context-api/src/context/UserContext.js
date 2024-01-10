import { createContext } from 'react';

const defaultUser = {
  // name: '홍길동',
  // setName: () => {}, // 이름 변경 함수
};

export const UserContext = createContext(defaultUser);

// 1)
// UserContext 라는 컨텍스트 객체 생성. (defaultUser 값을 가진)
// UserContext 안에는 Provider, consumer가 존재.
