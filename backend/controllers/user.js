const User = require("../models/User")
const Workout = require("../models/Workout")

exports.editInfo = async (req, res) => {
  const { _id } = req.user
  const {
    username,
    user,
    weight,
    weightPrefix,
    heightPrefix,
    height,
    exercise,
  } = req.body
  await User.findByIdAndUpdate(_id, {
    username,
    user,
    weight: {
      value: weight,
      weightPrefix,
    },
    height: {
      value: height,
      heightPrefix,
    },
    exercise,
  })
    .then((user) => {
      res.status(200).json({ user, message: "Fields edited successfully" })
    })
    .catch((error) => {
      res.status(500).json({
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
    weight: {
      value: weight,
      weightPrefix: weight.weightPrefix,
    },
    height: {
      value: height,
      heightPrefix: weight.weightPrefix,
    },
    exercise,
    email,
  })
  res.status(200).json({ user: "Fields edited successfully" })
}

exports.updatePic = async (req, res) => {
  const { id } = req.params
  const { profile_pic } = req.body
  await User.findByIdAndUpdate(id, { profile_pic: profile_pic })

  res.status(200).json({ user: "Edited successfully" })
}

exports.createWorkout = async (req, res) => {
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
  res.status(200).json({ message: "Workout created!" })
}

exports.deleteUser = async (req, res) => {
  const { id } = req.params
  await User.findByIdAndDelete(id)
  res.status(200).json({ message: "User Deleted" })
}

exports.saveWorkout = async (req, res) => {
  const { _id } = req.user
  const { workout } = req.body
  const user = await User.findOne({ favWorkouts: workout._id })
  if (user) {
    return res.status(500).json({ message: "Workout already existis!" })
  } else {
    await User.findByIdAndUpdate(
      _id,
      {
        $push: {
          favWorkouts: workout,
        },
      },
      {
        new: true,
      }
    )
    res.status(200).json({ message: "workout saved" })
  }
}

exports.getSavedWorkouts = async (req, res) => {
  const { _id } = req.user
  const workouts = await User.findOne({ _id }, "favWorkouts").populate(
    "favWorkouts"
  )
  res.status(200).json(workouts)
}

exports.removeFavoriteWorkout = async (req, res) => {
  const { _id: user_id } = req.user
  const { _id: workout_id } = req.body

  await User.findOneAndUpdate(
    {
      _id: user_id,
    },
    {
      $pull: {
        favWorkouts: workout_id,
      },
    },
    {
      new: true,
    }
  )

  res
    .status(200)
    .json({
      message: "workout deleted successfully!",
      deletedWorkout: workout_id,
    })
}
