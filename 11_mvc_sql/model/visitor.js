// exports.getVisitors = () => { 
//     return [
//         {id: 1, name: '홍길동', comment: '내가 왔다.'},
//         {id: 2, name: '이찬혁', comment: '으라차차'}
//     ]
// }

// --- mysql 연결 ---
const mysql = require('mysql2');
// const { login } = require('../../10_mvc/model/Test');

// DB 연결
const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'member',
})

// ------ 콜백 함수 ------
exports.getVisitors = (cb) => {
    // query( sql, values? ,콜백함수 ) -> 1번쨰 인자 : sql, 2번째 인자 : 콜백함수
    conn.query(`SELECT * FROM visitor`, (err, rows) => {
        // DB 데이터 가져온 후 실행.
        if (err) throw err;

        console.log('Visitor.js >', rows);
        /**
         * [
            { id: 1, name: '홍길동', comment: '내가 왔다.' },   
            { id: 2, name: '이찬혁', comment: '으라차차' }      ]
         */
        cb(rows);   // 컨트롤러로 결과값을 넘겨줌
    })
}

exports.postVisitor = (data, cb) => {
    // data: 우리가 넘겨준 req. body
    // cb: 콜백함수
    console.log('postVisitor >', data);

    /*
        Prepared Statements
        SQL 쿼리에서 사용자 입력을 안전하게 처리하고 SQL 인젝션 공격을 방지하기 위한 방법
        입력 데이터를 직접 문자열로 쿼리에 삽입하는 대신,
        플레이스 홀더 사용하여 쿼리 작성
        mysql 에서는? (물음표) 사용
    */

    const sql = 'INSERT INTO visitor (name, comment) VALUES (data.name, data.comment) = (?, ?)';
    const values = [data.name, data.comment];
    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('Visitor.js >', rows);
        cb(rows.insertId);  // 콜백함수 호출, 매개변수로 3이라는 값.
    })
}