import styled from 'styled-components';

//기본 사용법
const _Boxone = styled.div`
  background-color: blue;
  width: 100px;
  height: 100px;
`;
//props를 이용하는 방법
const _Boxtwo = styled.div`
  background-color: ${(props) => props.color};
  width: 150px;
  height: 150px;
`;
//상속받아서 이용하는 방법
const _Circle = styled(_Boxtwo)`
  border-radius: 50%;
`;
//버튼컴포넌트와 as키워드를 사용
const _Btn = styled.button`
  background-color: aqua;
  color: ${(props) => props.color};
  padding: 10px 15px;
  border-radius: 4px;
`;
//html태그에 옵션값을 넣는 방법
const _Input = styled.input.attrs({ required: true, readOnly: true })`
  background-color: yellow;
`;

//중첩
const _Boxthree = styled.div`
  width: 200px;
  height: 200px;
  background-color: chocolate;
  line-height: 200px;
  text-align: center;

  //다른 컴포넌트를 불러와서 사용
  ${_Input} {
    background-color: crimson;
  }

  p {
    color: white;
    font-weight: bold;

    //pseudo
    &:hover {
      font-size: 30px;
    }
  }
`;

export default function StyledComponent() {
  return (
    <>
      <_Boxthree>
        <p>Hello</p>
        <_Input />
      </_Boxthree>
      <_Boxone>Hello Styled</_Boxone>
      <_Boxtwo color={'red'}>Hello</_Boxtwo>
      <_Circle color={'green'}></_Circle>
      <_Btn color={'white'}>클릭</_Btn>
      <_Btn as="a" href="https://www.naver.com">
        a 태그
      </_Btn>
      <br />
      <_Input />
    </>
  );
}
