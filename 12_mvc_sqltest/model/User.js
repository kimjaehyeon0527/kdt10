const mysql = require('mysql2');

const conn = mysql.createConnection({
    host: 'localhost',
    user: 'user',
    password: '1234',
    database: 'kdt'
})

exports.postMember = (data, cb) => {
    console.log('postMember >', data);

    const sql = 'INSERT INTO user (id, password, name) VALUES( ? , ? , ?)';
    const values = [data.id, data.password, data.name];
    conn.query(sql, values, (err,rows) => {
        if (err) throw err;
        
        console.log('User.js >' , rows);

        cb(rows);
    })
}