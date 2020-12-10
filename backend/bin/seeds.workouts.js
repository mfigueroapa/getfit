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
    image: "https://res.cloudinary.com/dj52orqog/image/upload/v1607569483/getfit/image8_nud8na.jpg",
    description: "Cardiovascular conditioning involves moderate to vigorous physical activity that results in an elevated heart rate for a sustained period of time. Regular cardiovascular exercise improves the efficiency of the functioning of the heart, lungs, and circulatory system. For adults, aerobic exercise within a target heart rate range calculated based on a maximum heart rate by age is recommended. For healthy children, cardiovascular exercise that elevates the heart rate to no greater than a maximum heart rate of 200 beats per minute is recommended.",
    level: "Beginner",
    exercises: [
      "5fcfba9ba70139a0cf050195",
      "5fcfba9ba70139a0cf050196",
      "5fcfba9ba70139a0cf050197",
      "5fcfba9ba70139a0cf050199",
      "5fcfba9ba70139a0cf050198",
      "5fcfba9ba70139a0cf05019d"
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
    image: "https://res.cloudinary.com/dj52orqog/image/upload/v1607569484/getfit/image1_pe7mee.jpg",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
    level: "Beginner",
    exercises: [
      "5fcfba9ba70139a0cf05019c",
      "5fcfba9ba70139a0cf05019a",
      "5fcfba9ba70139a0cf05019b",
      "5fcfba9ba70139a0cf05019f",
      "5fcfba9ba70139a0cf0501a2",
      "5fcfba9ba70139a0cf05019e"
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
    image: "https://res.cloudinary.com/dj52orqog/image/upload/v1607569486/getfit/image9_sxnk2n.jpg",
    description: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas",
    level: "Beginner",
    exercises: [
      "5fcfba9ba70139a0cf0501a1",
      "5fcfba9ba70139a0cf0501a0",
      "5fcfba9ba70139a0cf0501a4",
      "5fcfba9ba70139a0cf0501a6",
      "5fcfba9ba70139a0cf0501a5",
      "5fcfba9ba70139a0cf0501a3"
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
    image: "https://res.cloudinary.com/dj52orqog/image/upload/v1607569489/getfit/image12_thnrms.jpg",
    description: "Cardiovascular conditioning involves moderate to vigorous physical activity that results in an elevated heart rate for a sustained period of time. Regular cardiovascular exercise improves the efficiency of the functioning of the heart, lungs, and circulatory system. For adults, aerobic exercise within a target heart rate range calculated based on a maximum heart rate by age is recommended. For healthy children, cardiovascular exercise that elevates the heart rate to no greater than a maximum heart rate of 200 beats per minute is recommended.",
    level: "Beginner",
    exercises: [
      "5fcfba9ba70139a0cf0501a7",
      "5fcfba9ba70139a0cf0501a4",
      "5fcfba9ba70139a0cf0501a8",
      "5fcfba9ba70139a0cf0501a9",
      "5fcfba9ba70139a0cf0501af",
      "5fcfba9ba70139a0cf0501ae"
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
    image: "https://res.cloudinary.com/dj52orqog/image/upload/v1607569489/getfit/image10_sxt4hr.jpg",
    description: "Cardiovascular conditioning involves moderate to vigorous physical activity that results in an elevated heart rate for a sustained period of time. Regular cardiovascular exercise improves the efficiency of the functioning of the heart, lungs, and circulatory system. For adults, aerobic exercise within a target heart rate range calculated based on a maximum heart rate by age is recommended. For healthy children, cardiovascular exercise that elevates the heart rate to no greater than a maximum heart rate of 200 beats per minute is recommended.",
    level: "Beginner",
    exercises: [
      "5fcfba9ba70139a0cf0501b0",
      "5fcfba9ba70139a0cf0501ad",
      "5fcfba9ba70139a0cf0501b3",
      "5fcfba9ba70139a0cf0501b5",
      "5fcfba9ba70139a0cf0501b2",
      "5fcfba9ba70139a0cf0501b4"
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
    image: "https://res.cloudinary.com/dj52orqog/image/upload/v1607569491/getfit/image11_hq2qto.jpg",
    description: "Cardiovascular conditioning involves moderate to vigorous physical activity that results in an elevated heart rate for a sustained period of time. Regular cardiovascular exercise improves the efficiency of the functioning of the heart, lungs, and circulatory system. For adults, aerobic exercise within a target heart rate range calculated based on a maximum heart rate by age is recommended. For healthy children, cardiovascular exercise that elevates the heart rate to no greater than a maximum heart rate of 200 beats per minute is recommended.",
    level: "Beginner",
    exercises: [
      "5fcfba9ba70139a0cf0501b6",
      "5fcfba9ba70139a0cf0501b8",
      "5fcfba9ba70139a0cf0501b9",
      "5fcfba9ba70139a0cf0501ba",
      "5fcfba9ba70139a0cf0501b7",
      "5fcfba9ba70139a0cf0501bb"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  },
  {
    name: "Yoga Flow",
    image: "https://res.cloudinary.com/dj52orqog/image/upload/v1607569491/getfit/image13_xmzgaq.jpg",
    description: "Cardiovascular conditioning involves moderate to vigorous physical activity that results in an elevated heart rate for a sustained period of time. Regular cardiovascular exercise improves the efficiency of the functioning of the heart, lungs, and circulatory system. For adults, aerobic exercise within a target heart rate range calculated based on a maximum heart rate by age is recommended. For healthy children, cardiovascular exercise that elevates the heart rate to no greater than a maximum heart rate of 200 beats per minute is recommended.",
    level: "Beginner",
    exercises: [
      "5fcfba9ba70139a0cf0501bd",
      "5fcfba9ba70139a0cf0501be",
      "5fcfba9ba70139a0cf0501bc",
      "5fcfba9ba70139a0cf0501bd",
      "5fcfba9ba70139a0cf0501bb",
      "5fcfba9ba70139a0cf0501b7"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  },
  {
    name: "Cycle Sync",
    image: "https://res.cloudinary.com/dj52orqog/image/upload/v1607569491/getfit/image13_xmzgaq.jpg",
    description: "Cardiovascular conditioning involves moderate to vigorous physical activity that results in an elevated heart rate for a sustained period of time. Regular cardiovascular exercise improves the efficiency of the functioning of the heart, lungs, and circulatory system. For adults, aerobic exercise within a target heart rate range calculated based on a maximum heart rate by age is recommended. For healthy children, cardiovascular exercise that elevates the heart rate to no greater than a maximum heart rate of 200 beats per minute is recommended.",
    level: "Beginner",
    exercises: [
      "5fcfba9ba70139a0cf0501ba",
      "5fcfba9ba70139a0cf0501b9",
      "5fcfba9ba70139a0cf0501b8",
      "5fcfba9ba70139a0cf0501b6",
      "5fcfba9ba70139a0cf0501b4",
      "5fcfba9ba70139a0cf0501b2"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  },
  {
    name: "Done in under 20",
    image: "https://res.cloudinary.com/dj52orqog/image/upload/v1607569482/getfit/image5_pqtqf6.jpg",
    description: "Cardiovascular conditioning involves moderate to vigorous physical activity that results in an elevated heart rate for a sustained period of time. Regular cardiovascular exercise improves the efficiency of the functioning of the heart, lungs, and circulatory system. For adults, aerobic exercise within a target heart rate range calculated based on a maximum heart rate by age is recommended. For healthy children, cardiovascular exercise that elevates the heart rate to no greater than a maximum heart rate of 200 beats per minute is recommended.",
    level: "Beginner",
    exercises: [
      "5fcfba9ba70139a0cf0501bd",
      "5fcfba9ba70139a0cf0501be",
      "5fcfba9ba70139a0cf0501bc",
      "5fcfba9ba70139a0cf0501bd",
      "5fcfba9ba70139a0cf0501bb",
      "5fcfba9ba70139a0cf0501b7"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  },
  {
    name: "Cross Training",
    image: "https://res.cloudinary.com/dj52orqog/image/upload/v1607569478/getfit/image7_hthb19.jpg",
    description: "Cardiovascular conditioning involves moderate to vigorous physical activity that results in an elevated heart rate for a sustained period of time. Regular cardiovascular exercise improves the efficiency of the functioning of the heart, lungs, and circulatory system. For adults, aerobic exercise within a target heart rate range calculated based on a maximum heart rate by age is recommended. For healthy children, cardiovascular exercise that elevates the heart rate to no greater than a maximum heart rate of 200 beats per minute is recommended.",
    level: "Beginner",
    exercises: [
      "5fcfba9ba70139a0cf0501a7",
      "5fcfba9ba70139a0cf0501a4",
      "5fcfba9ba70139a0cf0501a8",
      "5fcfba9ba70139a0cf0501a9",
      "5fcfba9ba70139a0cf0501af",
      "5fcfba9ba70139a0cf0501ae"
    ],
    round_rest: 20,
    set_rest: 60,
    repeat: 4,
    sets: 2,
    exercises_per_set: 3,
    created_by: "Get Fit"
  }
]