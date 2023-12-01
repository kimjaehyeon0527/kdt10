const Tester = require('../model/Test');

exports.test = (req, res) => {
    res.render('test')
}

exports.quest = (req, res) => {
    // 클라이언트에서 전달한 ID, PW와 서버에 저장된 ID, PW 비교
    const {ID, PW} = req.body;
    console.log(Tester.login())

    // userId, userPw => db데이터
    if(ID === Tester.login().userId && PW === Tester.login().userPw) {
        res.send({success:true});
    } else {
        res.send({success:false});
    }

    // 결과 값을 반환.  
}