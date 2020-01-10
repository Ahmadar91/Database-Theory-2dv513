
const homeController = {}
// const CodeSnippet = require('../models/CodeSnippet')

homeController.index = async (req, res, next) => {
  try {
    res.send(JSON.stringify({ Message: 'connected' }))
  } catch (error) {
    next(error)
  }
}
module.exports = homeController
