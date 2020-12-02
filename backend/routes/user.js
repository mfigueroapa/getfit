const User = require("../models/User")
const router = require("express").Router()
const {editInfo} = require('../controllers/user')

router.post("/edit-info", editInfo)

router.post('./create-workout')

module.exports = router
