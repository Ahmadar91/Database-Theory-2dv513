const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator/check')
const User = require('../models/user')
const authController = {}

authController.postLogin = (req, res, next) => {
  const name = req.body.username
  const password = req.body.password
  User.findOne({ where: { user_name: name } })
    .then(user => {
      if (!user) {
        return res.send(JSON.stringify({ Message: 'Invalid Username.' }))
      }
      bcrypt
        .compare(password, user.password)
        .then(doMatch => {
          if (doMatch) {
            return res.send(JSON.stringify({ Message: 'Logged in' }))
          }
          res.send(JSON.stringify({ Message: 'Invalid Password.' }))
        })
        .catch(err => {
          console.log(err)
          res.send(JSON.stringify({ Message: 'Invalid err.' + err }))
        })
    })
    .catch(err => console.log(err))
}

authController.postSignup = (req, res, next) => {
  const name = req.body.username
  const password = req.body.password
  const validationError = validationResult(req)
  if (!validationError.isEmpty()) {
    return res.send(JSON.stringify({ Message: validationError.array()[0].msg }))
  }

  if (name.isEmpty()) {
    res.send(JSON.stringify({ Message: 'Empty' }))
  }
  User.findOne({ where: { user_name: name } }).then(user => {
    if (user) {
      console.log(user)
      return res.send(JSON.stringify({ Message: 'name exists already, please pick a different one.' }))
    }

    return bcrypt
      .hash(password, 12)
      .then(hashedPassword => {
        return User.create({ user_name: name, password: hashedPassword }).then(name => {
          console.log(`${name}'s auto-generated ID:`, name.id)
        })
      })
      .then(result => {
        res.send(JSON.stringify({ Message: 'you can login redirect to login.' }))
      })
  })
    .catch(err => {
      console.log(err)
    })
}

authController.logout = (req, res, next) => {
  req.session.destroy(err => {
    if (err) {
      console.log(err)
    }
    res.redirect('/')
  })
}
module.exports = authController
