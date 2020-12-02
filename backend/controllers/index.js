const Workout = require("../models/Workout")
const Exercise = require("../models/Exercise")

exports.getExercises = async (req, res) => {
  const exercises = await Exercise.find()
  res.status(200).json(exercises)
}

exports.getWorkouts = async (req, res) => {
  const workouts = await Workout.find()
  res.status(200).json(workouts)
}
