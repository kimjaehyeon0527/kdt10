const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// GET /
router.get('/', controller.main);

// GET /visitor - 전체 조회

router.get('/visitors', controller.get_visitors);

// POST /visitor
router.post('/visitor', controller.post_visitor);

// GET /visitor - gksk whghl
router.get('/visitor', controller.get_visitor);

module.exports = router;