const { Schema, model } = require('mongoose');
const PLM = require('passport-local-mongoose');

const userSchema = new Schema(
  {
    email: String,
    googleID: String,
    username: String, 
    user: {
      type: String,
      enum: ['User', 'Trainer'],
    },
    weight: {
      value: Number,
      weightPrefix: String
    },
    height: {
      value: Number,
      heightPrefix: String
    },
    profile_pic: {
      type: String,
      default: "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
    },
    exercise: {
      type: String,
      enum: ['Begginer', 'Intermediate', 'Avanzed',''],
      default: ''
    },
    workout: [{
      type: Schema.Types.ObjectId,
      ref: 'Workout'
    }]
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.plugin(PLM, { usernameField: 'email' });

module.exports = model('User', userSchema);

