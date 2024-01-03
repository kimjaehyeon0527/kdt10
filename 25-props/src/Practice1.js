const Practice1 = (props) => {
  const { food } = props;
  const style = {
    color: 'red',
  };

  return (
    <div>
      <h1 style={style}>{food}</h1>
      {/* 해설 */}
      {/* <span style={{color: 'red'}}>{props.food}</span> */}
    </div>
  );
};

Practice1.defaultProps = {
  food: '치킨도 좋아요',
};

export default Practice1;
