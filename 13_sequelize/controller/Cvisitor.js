// [After]
// models: models/index에서 export한 db 객체
const models = require('../models/index');
const Visitor = models.Visitor;     // models 안에 있는 Visitor를 사용.


// GET /
exports.main = (req, res) => {
    res.render('index');
}

// GET /visitor
exports.get_visitors = (req, res) => {
    // [Before]
    // Visitor.getVisitors((result) => {
    //     // 모델에 rows를 result라는 변수명으로 받음
    //     console.log('Cvisitor.js >', result);
    //     res.render('visitor', { data: result });
    // })

    // [After]
    //  SELECT * FROM visitor
    Visitor.findAll().then((result) => {
        console.log('findAll >', result);   // [ {}, {}, ... ]
        res.render('visitor', { data: result });
    })
}
// POST /visitor
exports.post_visitor = (req, res) => {
    console.log(req.body);
    const { name, comment } = req.body;
    // [Before]
    // Visitor.postVisitor(req.body, (result) => {
    //     console.log(result);
    //     res.send({ id: result, name, comment });
    // })

    // [After]
    // 'INSERT INTO visitor (name, comment) VALUES ( ? , ? )';
    Visitor.create({
        // table에 있는 칼럼들.
        name: name,
        comment: comment
    }).then((result) => {
        console.log('create >', result);
        res.send(result);   // { id: 3, name: '바나나', comment: '안녕' }
    })
}

// GET /visitor => localhost:PORT/visitor?id=N
exports.get_visitor = (req, res) => {
    console.log(req.query); // { id: '1' }
    console.log(req.query.id);

    // // 모델에 함수 호출
    // Visitor.getVisitor(req.query.id, (result) => {
    //     // result: rows[0] -> { id: 1, name: '홍길동', comment: '내가 왔다.' }
    //     console.log('get_visitor Cvisitor.js >', result);
    //     res.send(result);   
    // })
    // [After]
    // 'SELECT * FROM visitor WHERE id = ?';
    Visitor.findOne({
        where: { id: req.query.id }
    }).then((result) => {
        console.log('findOne >', result);
        res.send(result)
    })
}

// GET /visitor/:id => localhost:PORT/visitor/:id
exports.get_visitor2 = (req, res) => {
    console.log(req.params); // { id: '1' }
    console.log(req.params.id);
    // [Before]
    // Visitor.getVisitor(req.params.id, (result) => {
    //     console.log('get_visitor2 Cvisitor.js >', result);
    //     res.send(result);
    // })
    
    // [After]
    // 'SELECT * FROM visitor WHERE id = ?';
    Visitor.findOne({
        where: { id: req.params.id }
    }).then((result) => {
        console.log('findOne2 >', result);
        res.send(result);
    })
}

// PATCH /visitor
exports.patch_visitor = (req, res) => {
    console.log(req.body); // { id: 4, name: '바나나맛', comment: '우유' }
    // [Before]
    // Visitor.patchVisitor(req.body, (result) => {
    //     console.log('patchVisitor Cvisitor.js >', result);
    //     res.send('수정 성공!');
    // })
    
    // [After]
    // 'UPDATE visitor SET name = ?, comment = ? WHERE id = ?'
    Visitor.update({
        name: req.body.name,
        comment: req.body.comment
    },
    {
        where: {
            id: req.body.id,
        }
    }).then((result) => {
        console.log('update >', result); // [1]
        res.send('수정 성공!');
    })
}

// DELETE /visitor
exports.delete_visitor = (req, res) => {
    console.log(req.body);
    console.log(req.body.id);
    // [Before]
    // Visitor.deleteVisitor(req.body.id, (result) => {
    //     console.log('deleteVisitor Cvisitor.js >', result);
    //     res.send('삭제 성공!');
    // })

    // [After]
    // DELETE FROM visitor WHERE id = ?
    Visitor.destroy({
        where: { id: req.body.id }
    }).then((result) => {
        console.log('destory >', result);   // 1
        res.send('삭제 성공!');
    })
}