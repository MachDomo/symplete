const sequelize = require('sequelize');
const db = require('./../db/config');

const MOCK_EMPLOYEES = [
  {name: 'Joe Smith'},
  {name: 'David Tennant'},
  {name: 'Gordon Ramsay'}
];

const MOCK_TASKS = [
  {title: 'Task 1', description: 'Create wireframes'},
  {title: 'Task 2', description: 'Set up database schema'},
  {title: 'Task 3', description: 'Travel through time and space'},
  {title: 'Task 4', description: 'Scramble some eggs'}
];

const seedDB = () => {
  db.Employee.destroy({where: {}}).then(() => {
    db.Employee.bulkCreate(MOCK_EMPLOYEES).then(() => {
      console.log('MOCK Employees CREATED');
    });
  }).catch(err => console.log(err));
  db.Task.destroy({where: {}}).then(() => {
    db.Task.bulkCreate(MOCK_TASKS).then(() => {
      console.log('MOCK Tasks CREATED');
    });
  }).catch(err => console.log(err));
};

module.exports = seedDB;
