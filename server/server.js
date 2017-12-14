const express = require('express');
const db = require('./../db/config');
const path = require('path');
const seedDB = require('./seed');

const app = express();

// Loads mock employee data
seedDB();

// Serve up static files
app.use(express.static(path.join(__dirname, '../client/public/dist')));

// Retrieve all employees
app.get('/api/employees', (req, res) => {
  db.Employee.findAll().then((employees) => {
    res.json(employees);
  })
});

// Retrieve all tasks
app.get('/api/tasks', (req, res) => {
});

// Retrieve all tasks by a specific employee
app.get('/api/tasks/:employeeid', (req, res) => {
});

// Create a task
app.post('/api/tasks', (req, res) => {
});

// Remove a task from employee
app.put('/api/tasks/remove/:taskid', (req, res) => {
});


app.listen(3000, () => {
  console.log('Listening on localhost:3000');
});


module.exports = app;
