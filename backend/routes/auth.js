const express = require('express');
const router = express.Router();
const {signup, login, logout, profile} = require('../controllers/auth')
const {isAuth} = require('../middlewares/isAuth')
const passport = require('../config/passport');

router.post('/signup', signup)
router.post('/login', passport.authenticate('local'), login)
router.get('/logout', logout)
router.get('/profile', isAuth, profile)

module.exports = router;
