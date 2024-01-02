const Button = (props) => {
  // 구조 분해
  const { link, children } = props;
  return (
    <a href={link}>
      <button>{children}</button>
    </a>
  );
};
export default Button;
