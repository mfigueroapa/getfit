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
        .json({
          data: {
            msg: "You can only enter number on weight and height fields",
          },
        })
    })
}

exports.updateProfile = async (req, res) => {
  const { id } = req.params
  const { username, weight, height, exercise, email } = req.body
  await User.findByIdAndUpdate(id, {
    username,
    weight,
    height,
    exercise,
    email,
  })
  res.status(200).json({ user: "Fields edited successfully" })
}

exports.updatePic = async (req, res) => {
  const { id } = req.params
  const { profile_pic } = req.body
  console.log(id)
  const hello = await User.findByIdAndUpdate(id, { profile_pic: profile_pic })

  res.status(200).json({ user: "Fields edited successfully" })
}

exports.createWorkout = async (req, res) => {
  const { _id } = req.user
  console.log(_id)
  // console.log(req)
  console.log(req.body)
  const {
    name,
    image,
    exercises,
    description,
    level,
    round_rest,
    set_rest,
    repeat,
    sets,
    exercises_per_set,
    created_by,
  } = req.body
  
  // console.log("Arreglo d exerics: ", exercises)

  await Workout.create({
    name,
    image,
    exercises,
    description,
    level,
    round_rest,
    set_rest,
    repeat,
    sets,
    exercises_per_set,
    created_by,
  })

  
  res.status(200).json({ message: "recibido men" })
}

exports.deleteUser = async (req, res) => {
  const { id } = req.params

  await User.findByIdAndDelete(id)

  res.status(200).json({ message: "User Deleted" })
}
