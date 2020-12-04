const Workout = require("../models/Workout")
const Exercise = require("../models/Exercise")

exports.getExercises = async (req, res) => {
  const exercises = await Exercise.find()
  res.status(200).json(exercises)
}

exports.getExercisesQuery = async (req, res) => {
}

exports.getWorkouts = async (req, res) => {
  const workouts = await Workout.find().populate('workout.set.exercises')
//   console.log(workouts[0].workout.set.exercises)
  res.status(200).json(workouts)
}

exports.getWorkout = async (req, res) => {
  const { id } = req.params
  const workout =  await Workout.findById(id).populate('exercises')
  res.status(200).json(workout)
}