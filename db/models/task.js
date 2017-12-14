const Sequelize = require('sequelize');

const Task = {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4,
    allowNull: false
  },
  title: Sequelize.STRING,
  description: Sequelize.STRING,
  employee_id: {
    type: Sequelize.UUID,
    allowNull: true
  }
};

module.exports = Task;
