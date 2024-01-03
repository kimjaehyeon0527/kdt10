import React, { Component } from 'react';

class Handler extends Component {
  state = {
    message: 'Hello World!',
  };
  //   onClick = () => {
  //     this.setState ({
  //         message:'GoodBye World!'
  //     })
  //   }

  render() {
    const { message } = this.state;
    return (
      <div>
        <h1>{message}</h1>
        <button onClick={() => this.setState({ message: 'GoodBye World!' })}>
          클릭
        </button>
      </div>
    );
  }
}
export default Handler;
