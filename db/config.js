const mysql = require('mysql2');
const Sequelize = require('sequelize');
const employeeSchema = require('./models/employee');
const taskSchema = require('./models/task');


// Database
const sequelize = new Sequelize('symplete_challenge', 'root', '', {
  dialect: 'mysql'
});

// For convenient export
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Model Definitions
db.employee = sequelize.define('employee', employeeSchema);
db.task = sequelize.define('task', taskSchema);


// Relationships
db.task.belongsTo(db.employee);
db.employee.hasMany(db.task);




db.sequelize.authenticate().then(() => {
  console.log('Connection successfully established.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = db;
