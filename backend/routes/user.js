const User = require("../models/User")
const router = require("express").Router()
const {editInfo, updateProfile, deleteUser, updatePic} = require('../controllers/user')

router.post("/edit-info", editInfo)

router.post("/update/:id", updateProfile)

router.post('/update-pic/:id', updatePic)

router.post('./create-workout')

router.post('/delete/:id', deleteUser)

module.exports = router
