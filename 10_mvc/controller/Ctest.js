const Tester = require('../model/Test');

exports.test = (req, res) => {
    res.render('test')
}

exports.quest = (req, res) => {
    // res.send(req.body);
    // 클라이언트에서 전달한 ID, PW와 서버에 저장된 ID, PW 비교
    const {ID, PW} = req.body;

    if(ID === userId && PW === userPw) {
        res.send({success:true});
    } else {
        res.send({success:false});
    }

    // 결과 값을 반환.  
}