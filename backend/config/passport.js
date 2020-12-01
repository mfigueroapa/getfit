const User = require("../models/User")
const passport = require("passport")
passport.use(User.createStrategy())

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
module.exports = passport
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());