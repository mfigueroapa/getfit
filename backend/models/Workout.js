const { Schema, model, Mongoose } = require("mongoose")

const workoutSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    level: String,
    exercises: [{
      type: Schema.Types.ObjectId,
      ref: 'Exercise'
    }],
    round_rest: Number,
    set_rest: Number,
    repeat: Number,
    sets: Number,
    exercises_per_set: Number,
    created_by: String
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
)

module.exports = model("Workout", workoutSchema)
