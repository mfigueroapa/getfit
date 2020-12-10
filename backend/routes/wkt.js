const User = require("../models/User")
const router = require("express").Router()
const {editInfo, updateProfile, deleteUser, updatePic, createWorkout, saveWorkout, getSavedWorkouts, removeFavoriteWorkout} = require('../controllers/user')

// router.post('/delete/:id', deleteUser)

router.post('/save-workout-to-favorites', saveWorkout)


module.exports = router
