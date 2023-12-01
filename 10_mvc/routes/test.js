const express = require('express');
const router = express.Router();
const controller = require('../controller/Ctest');

// test.ejs 페이지를 보여주기 위한 get 요청
router.get('/', controller.test);

router.post('/', controller.quest);
module.exports = router;