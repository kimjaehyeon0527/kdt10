const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

// 기본주소 : localhost:PORT

// GET /
router.get('/', controller.main);

// GET /visitor - 전체 조회
router.get('/visitorㄴ', controller.get_visitors);

// POST /visitor
router.post('/visitor', controller.post_visitor);

// GET /visitor - 하나 조회
router.get('/visitor', controller.get_visitor);

module.exports = router;