const { Schema, model, Mongoose } = require("mongoose")

const workoutSchema = new Schema(
  {
    name: String,
    image: String,
    description: String,
    level: String,
    workout: {
      set: {
        exercises: [{
          type: Schema.Types.ObjectId,
          ref: 'Exercise'
        }],
        round_rest: Number,
        set_rest: Number,
        repeat: Number
      }
    } 
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
)

module.exports = model("Workout", workoutSchema)
