const mysql = require('mysql2');
const Sequelize = require('sequelize');
const employeeSchema = require('./models/employee');
const taskSchema = require('./models/task');


// Arguments are = (DatabaseName, username, password)
const sequelize = new Sequelize('symplete_challenge', 'root', '', {
  dialect: 'mysql'
});

// For convenient export
const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// Model Definitions
db.Employee = sequelize.define('employee', employeeSchema);
db.Task = sequelize.define('task', taskSchema);

// Relationships
db.Task.belongsTo(db.Employee);
db.Employee.hasMany(db.Task);

// Creates tables if they don't exist
db.sequelize.sync();

db.sequelize.authenticate().then(() => {
  console.log('Connection successfully established.');
}).catch(err => {
  console.error('Unable to connect to the database:', err);
});

module.exports = db;
