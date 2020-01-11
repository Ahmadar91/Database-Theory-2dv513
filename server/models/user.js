const Sequelize = require('sequelize')
const db = require('../database/connection')
const User = db.define('users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true
  },
  user_name: {
    type: Sequelize.STRING
  },
  password: {
    type: Sequelize.TEXT
  }

})
module.exports = User
// Executing (default): SELECT `id`, `user_name`, `password`, `createdAt`, `updatedAt` FROM `users` AS `users` WHERE `users`.`user_name` = 'dddddddddddddd' LIMIT 1;
// Executing (default): INSERT INTO `users` (`id`,`user_name`,`password`,`createdAt`,`updatedAt`) VALUES (DEFAULT,?,?,?,?);
