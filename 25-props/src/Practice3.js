import { Component } from 'react';

import PropTypes from 'prop-types';

class Practice3 extends Component {
  render() {
    // this.props.text, this.props.valid (구조분해 할당)
    const { text, valid } = this.props;
    return (
      <div>
        <p>{text}</p>
        <button onClick={valid}>클릭</button>
      </div>
    );
  }
}

Practice3.defaultProps = {
  text: '이건 기본 text props 입니다.',
};

Practice3.propTypes = {
  text: PropTypes.string,
};

export default Practice3;
