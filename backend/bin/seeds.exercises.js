require('dotenv').config();

const mongoose = require('mongoose')
const Exercise = require('../models/Exercise')

mongoose
  .connect(process.env.DB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    // Remove Collection
    Exercise.remove({})
    .then(() => {
      console.log('collection removed') 
      Exercise.create(execises)
      .then(respond => {
        console.log(`Created ${respond.length} exercises`)
        mongoose.connection.close()
      })
      .catch(err => console.log(`An error occurred while getting books from the DB: ${err}`))
    })
    .catch(err => console.log(`An error occurred while getting books from the DB: ${err}`))
  })
  .catch((err) => console.error('Error connecting to mongo', err));


const execises = [
  {
    "name": "Axle Bar Power Clean",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/mroGR6UH5Cw/hqdefault.jpg",
    "videoUrl": "https://youtu.be/mroGR6UH5Cw",
    "focus": "Mobility",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Standing Tricep Extension on Cable Machine",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/-T66XHhmNJI/hqdefault.jpg",
    "videoUrl": "https://youtu.be/-T66XHhmNJI",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Elevator Goblet Squat",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/G8DTF8H4qvU/hqdefault.jpg",
    "videoUrl": "https://youtu.be/G8DTF8H4qvU",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Axle Bar Power Clean",
    "description": "A full body workout is just what it sounds like: a workout that aims to hit all the major muscle groups in one single session. Popular programs would include exercises for back, legs, chest, shoulders, arms and core.",
    "imageUrl": "https://img.youtube.com/vi/mroGR6UH5Cw/hqdefault.jpg",
    "videoUrl": "https://youtu.be/mroGR6UH5Cw",
    "focus": "Strength",
    "muscle_group": "Full Body",
    "level": "All Levels"
  },
  {
    "name": "Axle Bar Deadlift",
    "description": "A full body workout is just what it sounds like: a workout that aims to hit all the major muscle groups in one single session. Popular programs would include exercises for back, legs, chest, shoulders, arms and core.",
    "imageUrl": "https://img.youtube.com/vi/UTRCue9rGaE/hqdefault.jpg",
    "videoUrl": "https://youtu.be/UTRCue9rGaE",
    "focus": "Strength",
    "muscle_group": "Full Body",
    "level": "All Levels"
  },
  {
    "name": "Roller Pistol to Single Leg Vertical Jump",
    "description": "A full body workout is just what it sounds like: a workout that aims to hit all the major muscle groups in one single session. Popular programs would include exercises for back, legs, chest, shoulders, arms and core.",
    "imageUrl": "https://img.youtube.com/vi/DANmETgRwJE/hqdefault.jpg",
    "videoUrl": "https://youtu.be/DANmETgRwJE",
    "focus": "Strength",
    "muscle_group": "Full Body",
    "level": "All Levels"
  },
  {
    "name": "Decline Parallette Push-up",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/UgwZtY0f-rQ/hqdefault.jpg",
    "videoUrl": "https://youtu.be/UgwZtY0f-rQ",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Decline Barbell Tricep Extension",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/YucSbAMSOmA/hqdefault.jpg",
    "videoUrl": "https://youtu.be/YucSbAMSOmA",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Narrow Grip Supinated Pull-Up Negative",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/4UICwSmBMPA/hqdefault.jpg",
    "videoUrl": "https://youtu.be/4UICwSmBMPA",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Dumbbell Bent Over Row",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/Hh8Y5HT56P0/hqdefault.jpg",
    "videoUrl": "https://youtu.be/Hh8Y5HT56P0",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Standing Barbell Curl",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/WcAYy5UrFUI/hqdefault.jpg",
    "videoUrl": "https://youtu.be/WcAYy5UrFUI",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/G8DTF8H4qvU/hqdefault.jpg",
    "videoUrl": "",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Banded Hammer Curl + Press",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/UjGhQDCFuWo/hqdefault.jpg",
    "videoUrl": "https://youtu.be/UjGhQDCFuWo",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Single Arm Banded Tricep Pushdown",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/imZuGYVi-vk/hqdefault.jpg",
    "videoUrl": "https://youtu.be/imZuGYVi-vk",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Single Arm Cuban Press",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/tfPEh9oKBxk/hqdefault.jpg",
    "videoUrl": "https://youtu.be/tfPEh9oKBxk",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Scapular Ring Row",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/9R9gXT6qPMY/hqdefault.jpg",
    "videoUrl": "https://youtu.be/9R9gXT6qPMY",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Bent Over Dumbbell Reverse Fly",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/wrd8G2xB2FI/hqdefault.jpg",
    "videoUrl": "https://youtu.be/wrd8G2xB2FI",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Banded Single Arm Row",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/FbeuQKNLFT0/hqdefault.jpg",
    "videoUrl": "https://youtu.be/FbeuQKNLFT0",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "Banded Upright Row to Press",
    "description": "Upper body resistance or strength training has a long list of benefits. It helps you boost muscle strength and endurance in your arms, back, chest, and shoulders. It also helps you burn calories, reduce your risk of injury, and build stronger bones.",
    "imageUrl": "https://img.youtube.com/vi/gf78I-uhka8/hqdefault.jpg",
    "videoUrl": "https://youtu.be/gf78I-uhka8",
    "focus": "Strength",
    "muscle_group": "Upper Body",
    "level": "All Levels"
  },
  {
    "name": "One and a Quarter Dumbbell Romanian Deadlift",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/VdQfDA9qEMk/hqdefault.jpg",
    "videoUrl": "https://youtu.be/VdQfDA9qEMk",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Dumbbell Wall Sit",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/F0--ixFZkAQ/hqdefault.jpg",
    "videoUrl": "https://youtu.be/F0--ixFZkAQ",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Half Kneeling Banded Behind the Neck Press",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/6jy0Eeoq-MU/hqdefault.jpg",
    "videoUrl": "https://youtu.be/6jy0Eeoq-MU",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Rower Hamstring Curl",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/bb_YgWFu2cE/hqdefault.jpg",
    "videoUrl": "https://youtu.be/bb_YgWFu2cE",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Safety Squat Bar Split Squat",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/FENFsA5WYi4/hqdefault.jpg",
    "videoUrl": "https://youtu.be/FENFsA5WYi4",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Dumbbell Jump Lunge",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/5qxc3bAxCVk/hqdefault.jpg",
    "videoUrl": "https://youtu.be/5qxc3bAxCVk",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Lateral Box Step Over",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/A-npLEYkQ-Y/hqdefault.jpg",
    "videoUrl": "https://youtu.be/A-npLEYkQ-Y",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Alternating Tuck Up",
    "description": "A full body workout is just what it sounds like: a workout that aims to hit all the major muscle groups in one single session. Popular programs would include exercises for back, legs, chest, shoulders, arms and core.",
    "imageUrl": "https://img.youtube.com/vi/jNKz885A6Kc/hqdefault.jpg",
    "videoUrl": "https://youtu.be/jNKz885A6Kc",
    "focus": "Strenght",
    "muscle_group": "Full Body",
    "level": "All Levels"
  },
  {
    "name": "Alternating V-Up",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/V6zE3y5yTQ0/hqdefault.jpg",
    "videoUrl": "https://youtu.be/V6zE3y5yTQ0",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Modified Thomas Test",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/MVoNH89GzjQ/hqdefault.jpg",
    "videoUrl": "https://youtu.be/MVoNH89GzjQ",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Hollow Side Hold",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/lPMgDhESwrw/hqdefault.jpg",
    "videoUrl": "https://youtu.be/lPMgDhESwrw",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Incline Bench Hip Extension",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/hONeo_YLoyM/hqdefault.jpg",
    "videoUrl": "https://youtu.be/hONeo_YLoyM",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Strict Toes Through Rings",
    "description": "The lower extremity refers to the part of the body from the hip to the toes. The lower extremity includes the hip, knee, and ankle joints, and the bones of the thigh, leg, and foot.",
    "imageUrl": "https://img.youtube.com/vi/PrL7m43WCTE/hqdefault.jpg",
    "videoUrl": "https://youtu.be/PrL7m43WCTE",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  }
]