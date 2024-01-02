import { Component } from 'react';

class Book extends Component {
  render() {
    const { title, author, price, type } = this.props;
    return (
      <div className="container">
        <p className="text">이번주 베스트셀러</p>
        <img src="book.jpeg" />
        <p className="title">{title}</p>
        <p className="author">저자: {author}</p>
        <p className="price">판매가: {price}</p>
        <p className="type">구분: {type}</p>
      </div>
    );
  }
}

export default Book;
