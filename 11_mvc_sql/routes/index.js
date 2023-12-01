const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// GET /
router.get('/', controller.main);

// GET /index/visitor
router.get('/visitor', controller.getVisitors);

// POST /visitor
router.post('/visitor', controller.post_visitor);

module.exports = router;