const router = require("express").Router()
const {editInfo, updateProfile, deleteUser, updatePic, createWorkout, saveWorkout, getSavedWorkouts, removeFavoriteWorkout} = require('../controllers/user')

router.put("/edit-info", editInfo)
router.put("/update/:id", updateProfile)
router.put('/update-pic/:id', updatePic)
router.post('/create-workout', createWorkout)
router.delete('/delete/:id', deleteUser)
router.post('/save-workout-to-favorites', saveWorkout)
router.get('/saved-workouts', getSavedWorkouts)
router.post('/remove-favorite', removeFavoriteWorkout)

module.exports = router
