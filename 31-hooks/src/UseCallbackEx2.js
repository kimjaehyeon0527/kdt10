import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';
// 주소값이 바뀌나 안바뀌나 눈으로 보기 위한 예시2

// postId props로 받아서 주기
function UseCallbackEx2({ postId }) {
  const [post, setPost] = useState({}); // 가져올 데이터가 객체 형태이기 때문에 {}로 받아주기.

  // [before]
  //   const getPost = async () => {
  //     console.log('data fetching...');
  //     // 데이터 요청
  //     const res = await axios.get(
  //       `https://jsonplaceholder.typicode.com/posts/${postId}`
  //     );
  //     setPost(res.data);
  //   };

  // [after]
  // useCallback 훅으로 메모이제이션(캐싱) -> 의존성 배열에 있는 postId가 변경되지 않는 한,
  // 함수는 다시 생성되지 않는다.

  const getPost = useCallback(async () => {
    console.log('data fetching...');
    // 데이터 요청
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    setPost(res.data);
  }, [postId]);

  // useEffect 의존성 배열에 "함수"를 넣는다는 것은
  //   컴포넌트가 리렌더링 됨 -> 함수가 재생성 됨 (주소값 변경) -> getPost를 재호출함.
  useEffect(() => {
    getPost();
  }, [getPost]);
  return (
    <>
      <h1>useCallback ex2</h1>
      {post.id ? post.title : '로딩중..'}
    </>
  );
}

export default UseCallbackEx2;
