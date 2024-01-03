// import { Component } from 'react';
import React from 'react';
// book 이라는 이름으로 가져옴 (경로 설정)
import book from './book.jpeg';
import './App.css';

// class Practice2 extends Component {
//   render() {
//     const { title, author, price, type } = this.props;
//     return (
//       <div className="container">
//         <p className="text">이번주 베스트셀러</p>
//         <img src="book.jpeg" />
//         <p className="title">{title}</p>
//         <p className="author">저자: {author}</p>
//         <p className="price">판매가: {price}</p>
//         <p className="type">구분: {type}</p>
//       </div>
//     );
//   }
// }

// 해설
const Practice2 = ({ title, author, price, type }) => {
  return (
    <div className="container">
      <div className="text">이번주 베스트셀러</div>
      <img src={book} alt="" />
      <div className="title">{title}</div>
      <div className="author">{author}</div>
      <div className="price">{price}</div>
      <div className="type">{type}</div>
    </div>
  );
};

export default Practice2;
