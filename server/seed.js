const sequelize = require('sequelize');
const db = require('./../db/config');

const MOCK_EMPLOYEES = [
  {name: 'Joe Smith'},
  {name: 'David Tennant'},
  {name: 'Gordon Ramsay'}
];

const MOCK_TASKS = [
  {title: 'Create wireframes', description: 'Create wireframes'},
  {title: 'Set up database schema', description: 'Set up database schema'},
  {title: 'Travel through time and space', description: 'Travel through time and space'},
  {title: 'Scramble some eggs', description: 'Scramble some eggs'}
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
