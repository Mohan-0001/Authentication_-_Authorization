const express = require('express');
const { signup, verifyAccount, resentOTP, login, logout, forgetPassword, resetPassword } = require('../controller/authController');
const isAuthenticated = require('../middleware/isAuthenticated')

const router = express.Router();

router.post("/signup",signup);
router.post("/verify", isAuthenticated, verifyAccount);
router.post('/resend-otp', isAuthenticated, resentOTP);
router.post('/login',login);
router.post('/logout', logout);
router.post('/forget-password', forgetPassword);
router.post('/reset-password', resetPassword)

module.exports = router;