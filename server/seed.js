const sequelize = require('sequelize');
const db = require('./../db/config');

const TEST_DATA = [
  {name: 'Joe Smith'},
  {name: 'David Tennant'},
  {name: 'Gordon Ramsay'}
];

const seedDB = () => {
  db.Employee.destroy({where: {}}).then(() => {
    db.Employee.bulkCreate(TEST_DATA).then(() => {
      console.log('MOCK Employees CREATED');
    });
  }).catch(err => console.log(err));
};

module.exports = seedDB;
