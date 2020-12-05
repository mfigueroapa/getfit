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
    exercises: [
      "5fc937f7ca6244539cfcd8da",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dc",
      "5fc937f7ca6244539cfcd8da",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dc"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  },
  {
    name: "The Quick Quarter",
    image: "https://unsplash.com/photos/0Wra5YYVQJE",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
    level: "Beginner",
    exercises: [
      "5fc937f7ca6244539cfcd8e2",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dc",
      "5fc937f7ca6244539cfcd8da",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dc"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  },
  {
    name: "Quick Hit",
    image: "https://unsplash.com/photos/0Wra5YYVQJE",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
    level: "Beginner",
    exercises: [
      "5fc937f7ca6244539cfcd8df",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dc",
      "5fc937f7ca6244539cfcd8e4",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dc"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  },
  {
    name: "Get Leaner",
    image: "https://unsplash.com/photos/0Wra5YYVQJE",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
    level: "Beginner",
    exercises: [
      "5fc937f7ca6244539cfcd8e0",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8e3",
      "5fc937f7ca6244539cfcd8da",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dc"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  },
  {
    name: "Get Strong to Get Toned",
    image: "https://unsplash.com/photos/0Wra5YYVQJE",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
    level: "Beginner",
    exercises: [
      "5fc937f7ca6244539cfcd8e1",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dd",
      "5fc937f7ca6244539cfcd8da",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dc"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  },
  {
    name: "Detox from Desk Time",
    image: "https://unsplash.com/photos/0Wra5YYVQJE",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
    level: "Beginner",
    exercises: [
      "5fc937f7ca6244539cfcd8de",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dd",
      "5fc937f7ca6244539cfcd8da",
      "5fc937f7ca6244539cfcd8db",
      "5fc937f7ca6244539cfcd8dc"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  },
]