function Select(props) {
  const setData = props.setData;
  return (
    <>
      과일: {''}
      <select
        onChange={(e) => {
          // data state 값의 fruit 값을 변경하기
          console.log(e.target.value);

          setData((data) => {
            // spread 연산자
            // 이전의 data.state (객체 형태)
            // ...data : 이전 값 그대로
            // fruit 값만 변경이 일어나서 fruit만 바꿔준다.
            return { ...data, fruit: e.target.value };
          });
          console.log(e.target.value);
        }}
      >
        <option value="apple">사과</option>
        <option value="banana">바나나</option>
        <option value="peach">복숭아</option>
        <option value="orange">오렌지</option>
      </select>
      배경색:
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, backgournd: e.target.value };
          });
        }}
      >
        <option value="red">빨강</option>
        <option value="yellow'">노랑</option>
        <option value="blue">파랑</option>
      </select>
      글자색:
      <select
        onChange={(e) => {
          setData((data) => {
            return { ...data, color: e.target.value };
          });
        }}
      >
        <option value="red">빨강</option>
        <option value="yellow'">노랑</option>
        <option value="blue">파랑</option>
      </select>
    </>
  );
}

export default Select;
