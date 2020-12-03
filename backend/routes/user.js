const User = require("../models/User")
const router = require("express").Router()
const {editInfo, updateProfile} = require('../controllers/user')

router.post("/edit-info", editInfo)

router.post("/update/:id", updateProfile)

router.post('./create-workout')

module.exports = router
