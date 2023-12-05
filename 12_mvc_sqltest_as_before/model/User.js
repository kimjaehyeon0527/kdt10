const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt'
});

// 회원가입 요청
// 컨트롤러의 req를 -> data로 받는다.
// 콜백함수도 인자로 하나 받는다.
exports.post_signup = (data, cb) => {
    // data : req.body
    // cb: () => {} 함수가 담겨서 간다.

    // id는 auto 증가가 걸려 있기 때문에 값 입력을 안해준다.
    const sql = 'INSERT INTO user (userid, name, pw) VALUES (? , ? , ?)';
    const values = [data.userid, data.name, data.pw];

    // query 메소드에 관한 콜백함수 (err, rows)
    conn.query(sql, values, (err, rows) => {

        if(err) throw err;
        console.log('User.js - post_signup > ', rows);

        // 콜백함수에 rows 넘겨줘 보기.
        cb(rows);
    })
}

// 로그인 요청, 
exports.post_signin = (data, cb) => {
    // data: req.body
    // cb: () => {}

    const sql = 'SELECT * FROM user WHERE userid = ? and pw = ?';
    // 위 쿼리문의 ? 의 들어갈 입력값인듯 하다
    const values = [data.userid, data.pw];

    conn.query(sql, values, (err, rows) => {
        if (err) throw err;

        console.log('User.js - post_signin >', rows);   // [{}]
        cb(rows);
    })
}

// 회원정보 수정 페이지 요청
exports.post_profile = (userid, cb) => {
    const sql = 'SELECT * FROM user WHERE userid = ?';
    conn.query(sql, [userid], (err, rows) => {
        if(err) throw err;
        console.log('User.js post_profile >', rows);    // [{}]
        
        cb(rows);
    })
}

// 회원정보 수정 요청
exports.edit_profile = (data, cb) => {
    // userid or id 값 둘 중에 하나 위치
    const sql = 'UPDATE user SET name = ?, pw = ? where id = ?'
    const values = [data.name, data.pw, data.id];

    conn.query(sql, values, (err, rows) => {
        if(err) throw err;

        console.log('User.js - edit_profile >', rows);

        cb(rows);

    })
}

// 회원 탈퇴 요청
exports.delete_profile = (id, cb) => {
    const sql = 'DELETE FROM user WHERE id = ?';
    conn.query(sql, [id], (err, rows) => {
        if(err) throw err;

        console.log(('User.js delete_profile >', rows));

        cb(rows);
    })
}