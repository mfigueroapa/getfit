const { Schema, model } = require("mongoose")

const exerciseSchema = new Schema(
  {
    name: String,
    description: String,
    imageUrl: String,
    videoUrl: String,
    focus: String,
    muscle_group: String,
    level: String,
  },
  {
    timestamps: {
      createdAt: "created_at",
      updatedAt: "updated_at",
    },
  }
)

module.exports = model("Exercise", exerciseSchema)
