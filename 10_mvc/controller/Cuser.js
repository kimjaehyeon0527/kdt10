// 유저에 대한 처리
const User = require('../model/User');

// GET /user
exports.user = (req, res) => {
    console.log(User.userInfos());
    res.render('user', { userInfo: User.userInfos() });
};