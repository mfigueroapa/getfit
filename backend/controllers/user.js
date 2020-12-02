const User = require("../models/User")
const Workout = require("../models/Workout")
const Exercise = require("../models/Exercise")


exports.editInfo = async (req, res) => {
  const { _id } = req.user
  const { username, weight, height, exercise } = req.body
  await User.findByIdAndUpdate(
    _id,
    { username, weight, height, exercise }
  )
    res.status(200).json({ user: "Fields edited successfully" })
}

exports.createWorkout = async (req, res) => {
  const {_id} = req.user

  //workout
  //sacar [exercises], createdby(_id)
  //insertar en workout
  //find del id del workout insertado para darlo como referencia en exercise
  //push  de cada exericse al array 
  //
  
}