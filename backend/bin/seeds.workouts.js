require('dotenv').config();

const mongoose = require('mongoose')
const Workout = require('../models/Workout')

mongoose
  .connect(process.env.DB, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
  })
  .then((x) => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
    // Remove Collection
    Workout.remove({})
    .then(() => {
      console.log('collection removed') 
      Workout.create(workout)
      .then(respond => {
        console.log(`Created ${respond.length} workouts`)
        mongoose.connection.close()
      })
      .catch(err => console.log(`An error occurred while getting books from the DB: ${err}`))
    })
    .catch(err => console.log(`An error occurred while getting books from the DB: ${err}`))
  })
  .catch((err) => console.error('Error connecting to mongo', err));


const workout = [
  {
    name: "Go Rest Repeat",
    image: "https://unsplash.com/photos/0Wra5YYVQJE",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
    level: "Beginner",
    workout: {
      set: {
        exercises: [
          "5fc937f7ca6244539cfcd8da",
          "5fc937f7ca6244539cfcd8db",
          "5fc937f7ca6244539cfcd8dc"
        ],
      "round_rest": 20,
      "set_rest": 60,
      "repeat": 4
      }
    }
  }
]