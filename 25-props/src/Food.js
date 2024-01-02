const Food = (props) => {
  const { food } = props;
  const style = {
    color: 'red',
  };

  return (
    <div>
      <h1 style={style}>{food}</h1>
    </div>
  );
};

Food.defaultProps = {
  food: '치킨도 좋아요',
};

export default Food;
