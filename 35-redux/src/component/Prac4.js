import { useDispatch, useSelector } from 'react-redux';

function Prac4() {
  const isVisible = useSelector((state) => state.isVisible.boolean);
  const dispatch = useDispatch();

  return (
    <div className="Box2">
      <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}" 이다.</h2>
      <button onClick={() => dispatch({ type: 'isVisible/change' })}>
        change
      </button>
    </div>
  );
}

export default Prac4;
