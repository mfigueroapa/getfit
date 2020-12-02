const router = require('express').Router();
const {getExercises, getWorkouts} = require('../controllers/index')

router.get('/', (req, res, next) => {
  res.status(200).json({ msg: 'Working' });
});

router.get('/getExercises', getExercises)
router.get("/getWorkouts", getWorkouts)



module.exports = router;
