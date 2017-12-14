const mysql = require('mysql2');
const Sequelize = require('sequelize');



const db = new Sequelize('symplete_challenge', 'root', '', {
  dialect: 'mysql'
});



db.authenticate().then(() => {
  console.log('Connection successfully established.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = db;
