const express = require('express');
const router = express.Router();
const controller = require('../controller/Cuser');

// GET /8000/user
router.get('/user', controller.main); 

// GET /8000/user/signup
router.get('/user/signup', controller.signup);

router.post('/user/signup', controller.Register_signup);

// GET /8000/user/signin
router.get('/user/signin', controller.signin);

module.exports = router;
