const bcrypt = require('bcryptjs')
const { validationResult } = require('express-validator/check')
const User = require('../models/user')
const authController = {}

authController.postLogin = (req, res, next) => {
  const name = req.body.username
  const password = req.body.password
  User.findOne(name).then((user) => {
    const result = user[0]
    console.log(result)
    if (!result) {
      return res.send(JSON.stringify({ Message: 'Invalid Username.' }))
    }
    bcrypt
      .compare(password, result.password)
      .then(doMatch => {
        if (doMatch) {
          return res.status(200).send(JSON.stringify({ Message: 'Logged in' }))
        }
        res.send(JSON.stringify({ Message: 'Invalid Password.' }))
      })
      .catch(err => {
        console.log(err)
        res.res.status(500).send(JSON.stringify({ Message: 'Invalid err.' + err }))
      })
      .catch(err => console.log(err))
  })
}

authController.postSignup = (req, res, next) => {
  const name = req.body.username
  console.log(name)

  const password = req.body.password
  const validationError = validationResult(req)
  if (!validationError.isEmpty()) {
    return res.send(JSON.stringify({ Message: validationError.array()[0].msg }))
  }
  User.findOne(name).then(user => {
    console.log(name)

    const result = user[0]
    if (result) {
      return res.send(JSON.stringify({ Message: 'name exists already, please pick a different one.' }))
    }
    return bcrypt
      .hash(password, 12)
      .then(hashedPassword => {
        const data = {
          user_name: name,
          password: hashedPassword
        }
        console.log(User.create(data))
        return User.create(data)
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
