const User = require("../models/User")
const Workout = require("../models/Workout")
const Exercise = require("../models/Exercise")


exports.editInfo = async (req, res) => {
  const { _id } = req.user
  const { username, weight, height, exercise } = req.body
  await User.findByIdAndUpdate(_id, {
    username,
    weight,
    height,
    exercise,
  })
    .then((user) =>
      res.status(200).json({ data: { user: "Fields edited successfully" } })
    )
    .catch((error) => {
      res
      .status(500)
      .json({ data: { msg: "You can only enter number on weight and height fields" } })
    }
    )
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