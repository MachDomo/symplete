const sequelize = require('sequelize');
const db = require('./../db/config');

const MOCK_EMPLOYEES = [
  {name: 'Joe Smith'},
  {name: 'David Tennant'},
  {name: 'Gordon Ramsay'}
];

const MOCK_TASKS = [
  {title: 'Create wireframes', description: 'Make some mockups of the final app.'},
  {title: 'Set up database schema', description: 'Use MySQL and Sequelize to create a task managing application.'},
  {title: 'Travel through time and space', description: 'Find a doctor to help with this.'},
  {title: 'Scramble some eggs', description: 'Customers are hungry and are beginning to complain'}
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
