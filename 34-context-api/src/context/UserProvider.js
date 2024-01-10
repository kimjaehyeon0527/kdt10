import { useState } from 'react';
import { UserContext } from './UserContext';

function UserProvider({ children }) {
  // props 객체 형태의 children을 인자로 받아서 하위 요소로 삽입.

  // defaultUser로 설정한 값 (name, setName)
  // 이름 변경 할 수 있게 useState 사용
  const [name, setName] = useState('홍길동');

  return (
    <UserContext.Provider value={{ name: name, setName: setName }}>
      {children}
    </UserContext.Provider>

    // 2)
    // <UserContext.Provider > Value props 을 사용해서 값을 전달 <UserContext.Provider/>
    // 값이 변경되면 리렌더링 시킬수 있게 Provider 컴포넌트를 생성해야함.

    // UserProvider 라는 컴포넌트의 값을 UserProfile(하위 컴포넌트)에서 사용 가능
  );
}

export default UserProvider;
