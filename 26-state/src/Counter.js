import React, { Component } from 'react'; // imrc (단축키)

// 클래스형 컴포넌트
class Counter extends Component {
  state = {
    // number 초기값 : 0
    number: 0,
  };
  render() {
    // state 데이터는 this.state로 접근 가능 => this.state.number
    const { number } = this.state; // 너무 길어서 number만 구조분해로 떼옴
    return (
      <div>
        <h1>{number}</h1>
        {/* this.setState() : state 값을 바꾸는 함수 */}
        {/* state 값을 직접 변경은 불가능 */}
        {/* 클래스형에서 함수 사용시 화살표 함수 권장 (편하다) */}
        {/* 화살표함수가 아니면 함수를 연결 해줘야하는 바인딩을 따로 해줘야하기 때문. */}
        <button onClick={() => this.setState({ number: number + 1 })}>
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
