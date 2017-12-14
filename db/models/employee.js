const Sequelize = require('sequelize');

const Employee = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false
  },
  name: Sequelize.STRING
};

module.exports = Employee;
