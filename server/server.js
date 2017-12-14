const express = require('express');
const db = require('./../db/config');
const path = require('path');
const seedDB = require('./seed');
const bodyParser = require('body-parser');


const app = express();

// Stores data for us in req.body
app.use(bodyParser.json());

// Loads mock employee data -- Comment out in production
seedDB();

// Serve up static files
app.use(express.static(path.join(__dirname, '../client/public/dist')));

// Retrieve all employees
app.get('/api/employees', (req, res) => {
  db.Employee.findAll().then((employees) => {
    res.status(200).json(employees);
  }).catch((err) => {
    console.log('Server error retrieving employees:', err);
    res.status(500).json('There was a server error');
  });
});

// Retrieve all tasks
app.get('/api/tasks', (req, res) => {
  db.Task.findAll().then((tasks) => {
    res.status(200).json(tasks);
  }).catch((err) => {
    console.log('Server error retrieving tasks:', err);
    res.status(500).json('There was a server error');
  });
});

// Retrieve all tasks by a specific employee
app.get('/api/tasks/:employeeId', (req, res) => {
  db.Task.findAll({where: {employeeId: req.params.employeeId}}).then((tasks) => {
    res.status(200).json(tasks);
  }).catch((err) => {
    console.log('Server error retrieving tasks by employee id:', err);
    res.status(500).json('There was a server error');
  });
});

// Create a task -Not needed yet
app.post('/api/tasks', (req, res) => {
  const task = {title: req.body.title, description: req.body.description};
  console.log('post task', task);
  db.Task.create(task).then((task) => {
    res.status(201).json(task);
  }).catch((err) => {
    console.log('Server error creating task', err);
    res.status(500).json('There was a server error');
  });
});

// Join a task to an employee
app.put('/api/tasks/:taskId', (req, res) => {
  db.Task.update(
    {employeeId: req.body.employeeId || null},
    {where: {id: req.params.taskId}}
  ).then((task) => {
    res.status(201).json(task);
  }).catch((err) => {
    console.log('Server error joining task to an employee:', err);
    res.status(500).json('There was a server error');
  });
});

// Remove a task from employee
app.put('/api/tasks/:taskId/remove', (req, res) => {
  db.Task.update(
    {employeeId: null},
    {where: {id: req.params.taskId}}
  ).then((task) => {
    res.status(201).json(task);
  }).catch((err) => {
    console.log('Server error removing task from an employee:', err);
    res.status(500).json('There was a server error');
  });
});

app.listen(3000, () => {
  console.log('Listening on localhost:3000');
});


module.exports = app;
