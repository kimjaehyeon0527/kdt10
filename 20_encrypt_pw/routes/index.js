const express = require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);

router.get('/login', controller.login);

router.post('/', controller.post_user);

module.exports = router;