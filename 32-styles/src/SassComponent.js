import './styles/SassComponent.scss';

function SassComponent() {
  return (
    <>
      <div className={'container'}>
        {/* 'box red' */}
        <div className="box red"></div>
        <div className="box yellow"></div>
        <div className="box orange"></div>
      </div>

      <button className="btn">Button</button>
      <button className="btn-primary">Button Primary</button>
    </>
  );
}

export default SassComponent;
