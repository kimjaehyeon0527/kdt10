const Visitor = require('../model/Visitor');

// GET /
exports.main = (req, res) => {
    res.render('index');
}

// GET /visitor
exports.get_visitors = (req, res) => {
    // [Before]
    // console.log(Visitor.getVisitors()); // [ {}, {}]
    // res.render('visitor', { data: Visitor.getVisitors() });

    // [After]
    Visitor.getVisitors((result) => {
        console.log('Cvisitor.js >', result);
        res.render('visitor', { data: result });
    })
}

// POST /visitor
exports.post_visitor = (req, res) => {
    console.log(req.body);
    const { name, comment } = req.body;
    Visitor.postVisitor(req.body, (result) => {
        console.log(result);
        res.send({ id: result, name, comment });
    })
}

// GET /visitor => localhost:PORT/visitor?id=N
exports.get_visitor = (req, res) => {
    console.log(req.query); // {id: '1'}
    console.log(req.query.id);

    // 모델에 함수 호출
    Visitor.getVisitors(req.query.id, (result) => {
        // result: rows[0]
        console.log('get_visitor Cvisitor.js >', result);
        res.send(result);
    })
}