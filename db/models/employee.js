const Sequelize = require('sequelize');

const Employee = sequelize.define('employee', {
  id: {
    type: Sequelize.UUID,
    primaryKey: true,
    defaultValue: Sequelize.UUIDV4
    allowNull: false
  },
  name: Sequelize.STRING

  // tasks_id: {
  //   type: Sequelize.STRING,
  //   allowNull: false,
  //
  //   getTasks: function() {
  //     return this.getDataValue('TasksID').split(';');
  //   },
  //
  //   setTasks: function(val) {
  //     this.setDataValue('TasksID', val.join(';'));
  //   }
  // }
});

module.exports = Employee;
