const User = require("../models/User")
const router = require("express").Router()
const {editInfo, updateProfile, deleteUser, updatePic, createWorkout, saveWorkout, getSavedWorkouts} = require('../controllers/user')

// router.post("/edit-info", editInfo)
router.put("/edit-info", editInfo)

// router.post("/update/:id", updateProfile)
router.put("/update/:id", updateProfile)

// router.post('/update-pic/:id', updatePic)
router.put('/update-pic/:id', updatePic)

router.post('/create-workout', createWorkout)

router.delete('/delete/:id', deleteUser)
// router.post('/delete/:id', deleteUser)

router.post('/save-workout-to-favorites', saveWorkout)
router.get('/saved-workouts', getSavedWorkouts)

module.exports = router
