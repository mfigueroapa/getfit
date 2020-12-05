const User = require("../models/User")
const passport = require("passport")
const googleStrategy = require("passport-google-oauth20").Strategy

passport.serializeUser((user, cb) => {
  cb(null, user._id)
})
passport.deserializeUser(async (id, cb) => {
  try {
    const user = await User.findById(id)
    cb(null, user)
  } catch (err) {
    cb(err)
  }
})

passport.use(User.createStrategy())

passport.use(
  new googleStrategy(
    {
      clientID: process.env.GOOGLE_KEY,
      clientSecret: process.env.GOOGLE_SECRET,
      callbackURL: "/auth/google/callback",
    },
    async (_, __, { id, emails, photos }, done) => {
      const user = await User.findOne({ googleID: id })

      if (!user) {
        const newUser = await User.create({
          googleID: id,
          email: emails[0].value,
          image: photos[0].value,
        })
        done(null, newUser)
        return
      }

      done(null, user)
    }
  )
)

module.exports = passport

// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

// const User = require("../models/User")
// const passport = require("passport")
// passport.use(User.createStrategy())

// // passport.serializeUser(User.serializeUser)
// // passport.deserializeUser(User.deserializeUser())
// module.exports = passport
