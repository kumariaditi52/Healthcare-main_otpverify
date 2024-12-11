const express = require('express');
const { registerUser, loginUser, verifyOtpHandler } = require('../controllers/authController');
const router = express.Router();

router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/verify-otp', verifyOtpHandler)

module.exports = router;
