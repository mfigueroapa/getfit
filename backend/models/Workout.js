const { Schema, model } = require("mongoose")

const workoutSchema = new Schema(
  {
    exercies: [
      {
        type: Schema.Types.ObjectId,
        ref: "Exercise",
      },
    ],
    createdby: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
)

module.exports = model("Workout", workoutSchema)
