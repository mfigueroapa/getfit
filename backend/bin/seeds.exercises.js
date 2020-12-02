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
    "name": "Bicycle Toe Touch",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    "imageUrl": "https://acewebcontent.azureedge.net/exercise-library/large/70-1.jpg",
    "videoUrl": "https://youtu.be/ykJmrZ5v0Oo",
    "focus": "Mobility",
    "muscle_group": "Core",
    "level": "All Levels"
  },
  {
    "name": "Bicep Curl",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    "imageUrl": "https://acewebcontent.azureedge.net/exercise-library/large/70-1.jpg",
    "videoUrl": "https://youtu.be/ykJmrZ5v0Oo",
    "focus": "Endurance",
    "muscle_group": "Top Body",
    "level": "All Levels"
  },
  {
    "name": "Goblet Wall Sit",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    "imageUrl": "https://acewebcontent.azureedge.net/exercise-library/large/70-1.jpg",
    "videoUrl": "https://youtu.be/ykJmrZ5v0Oo",
    "focus": "Strenght",
    "muscle_group": "Lower Body",
    "level": "All Levels"
  },
  {
    "name": "Dip Support Knee Raise",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    "imageUrl": "https://acewebcontent.azureedge.net/exercise-library/large/70-1.jpg",
    "videoUrl": "https://youtu.be/ykJmrZ5v0Oo",
    "focus": "Mobility",
    "muscle_group": "Core",
    "level": "All Levels"
  },
  {
    "name": "Band Resisted Push Up",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    "imageUrl": "https://acewebcontent.azureedge.net/exercise-library/large/70-1.jpg",
    "videoUrl": "https://youtu.be/ykJmrZ5v0Oo",
    "focus": "Endurance",
    "muscle_group": "Top Body",
    "level": "Advanced"
  },
  {
    "name": "Bicep Curl 2",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    "imageUrl": "https://acewebcontent.azureedge.net/exercise-library/large/70-1.jpg",
    "videoUrl": "https://youtu.be/ykJmrZ5v0Oo",
    "focus": "Mobility",
    "muscle_group": "Lower Body",
    "level": "All Level"
  },
  {
    "name": "Bicep Curl 2",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    "imageUrl": "https://acewebcontent.azureedge.net/exercise-library/large/70-1.jpg",
    "videoUrl": "https://youtu.be/ykJmrZ5v0Oo",
    "focus": "Strenght",
    "muscle_group": "Top Body",
    "level": "All Level"
  },
  {
    "name": "Alternating Two Point Plank",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    "imageUrl": "https://acewebcontent.azureedge.net/exercise-library/large/70-1.jpg",
    "videoUrl": "https://youtu.be/ykJmrZ5v0Oo",
    "focus": "Strenght",
    "muscle_group": "Core",
    "level": "All Levels"
  },
  {
    "name": "Pull Up",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    "imageUrl": "https://acewebcontent.azureedge.net/exercise-library/large/70-1.jpg",
    "videoUrl": "https://youtu.be/ykJmrZ5v0Oo",
    "focus": "Intermediate",
    "muscle_group": "Top Body",
    "level": "Advanced"
  },
  {
    "name": "Single Dumbbell Decline Floor Press",
    "description": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati",
    "imageUrl": "https://acewebcontent.azureedge.net/exercise-library/large/70-1.jpg",
    "videoUrl": "https://youtu.be/ykJmrZ5v0Oo",
    "focus": "Intermediate",
    "muscle_group": "Top Body",
    "level": "All Levels"
  }
]
