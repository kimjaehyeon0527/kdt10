// // 나중에 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 만든 함수
// export const plus = () => ({ type: 'PLUS' });
// export const minus = () => ({ type: 'MINUS' });

// // 초기값 정의
// const initialState = {
//   number: 0,
// };

// // reducer 정의: action을 발생시키는 함수
// const counterReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'PLUS':
//       return { number: state.number + 1 };
//     case 'MINUS':
//       return { number: state.number - 1 };
//     default:
//       return state;
//   }
// };

// export default counterReducer;

export const plus = () => ({ type: 'counter/Plus' });
export const minus = () => ({ type: 'counter/Minus' });

const initialState = {
  number: 0,
};

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/Plus':
      return { number: state.number + 1 };
    case 'counter/Minus':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
