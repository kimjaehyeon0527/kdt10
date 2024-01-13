// import { useSelector, useDispatch } from 'react-redux';
// import { plus, minus } from '../store/counterReducer';

import { useDispatch, useSelector } from 'react-redux';
import { plus, minus } from '../store/counterReducer';

function Box4() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4 : {number}</h2>
      <button onClick={() => dispatch(plus())}>Plus</button>
      <button onClick={() => dispatch(minus())}>Minus</button>
    </div>
  );
}

export default Box4;
