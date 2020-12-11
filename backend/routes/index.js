const router = require('express').Router();
const {getExercises, getWorkouts, getWorkout} = require('../controllers/index')

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Server working' });
});

router.get('/getExercises', getExercises)
router.get("/getWorkouts", getWorkouts)
router.get('/workouts/:id', getWorkout)

module.exports = router;
