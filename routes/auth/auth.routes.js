const express = require('express');
const router = express.Router();
const registerUser = require('../../controllers/auth/register');
const loginUser = require('../../controllers/auth/login');
const confirmEmail = require('../../controllers/auth/confirmEmail');



router.post('/register', registerUser);

router.post('/login', loginUser);

router.post('/confirm-user', confirmEmail);

module.exports = router;