const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    username: String, 
    weight: String,
    height: String,
    exercise: {
      type: String,
      enum: ['Begginer', 'Intermediate', 'Avanzed'],
      default: 'Begginer'
    },
    workout: {
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);

