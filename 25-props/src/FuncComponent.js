// export default function FuncComponent() { }
import PropTypes from 'prop-types';

function FuncComponent(props) {
  // function FuncComponent({name})
  const { name } = props;
  return (
    <div>
      <h1>hi!</h1>
      <p>여기는 Function Component</p>
      {/* <p>
        새로운 컴포넌트의 이름은 <b>{props.name}</b>
      </p> */}
      <p>
        새로운 컴포넌트의 이름은 <b>{name}</b>
      </p>
    </div>
  );
}

// 기본값 설정 props 없을 때 나오는 내용
FuncComponent.defaultProps = {
  name: '길동',
};

FuncComponent.propTypes = {
  name: PropTypes.string,
};

export default FuncComponent;
