import './styles/Box.css';
import Prac1 from './component/Prac1';
import { useSelector } from 'react-redux';

function PracApp() {
  const isVisible = useSelector((state) => state.isVisible.boolean);

  return (
    <>
      <h1>React Redux Ex</h1>
      <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}" 이다.</h2>
      <Prac1 />
    </>
  );
}

export default PracApp;
