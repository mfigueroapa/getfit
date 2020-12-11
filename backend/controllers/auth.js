const User = require("../models/User")
const passport = require("passport")

exports.signup = async (req, res) => {
  User.register(req.body, req.body.password)
    .then((user) => {
      res.status(201).json({ user })
    })
    .catch((err) => res.status(500).json({ err }))
}
exports.login = async (req, res) => {
  const { user } = req
  res.status(200).json({ user })
}
exports.logout = async (req, res) => {
  req.logout()
  res.status(200).json({ msg: "Logged out" })
}

exports.profile = async (req, res) => {
  User.findById(req.user._id)
    .then((user) => res.status(200).json({ user }))
    .catch((err) => res.status(500).json({ err }))
}

exports.googleInit = passport.authenticate("google", {
  scope: [
    "https://www.googleapis.com/auth/userinfo.profile",
    "https://www.googleapis.com/auth/userinfo.email",
  ],
})

exports.googleCb = (req, res, next) => {
  passport.authenticate("google", (err, user, errDetails) => {
    if (err) return res.status(500).json({ err, errDetails })
    if (!user) return res.status(401).json({ err, errDetails })

    req.login(user, (err) => {
      if (err) return res.status(500).json({ err })

      if (user.exercise === "") {
        return res.redirect(
          process.env.ENV === "development"
            ? "http://localhost:3001/new-user-form"
            : "/new-user-form"
        )
      } else {
        return res.redirect(
          process.env.ENV === "development"
            ? "http://localhost:3001/dashboard"
            : "/dashboard"
        )
      }
    })
  })(req, res, next)
}
