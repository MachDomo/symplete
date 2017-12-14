import angular from 'angular';

import template from './team-members.html';
import './team-members.css';



class TeamController {
  constructor(TasksService) {
    this.TasksService = TasksService;
  }

  $onInit() {
    this.TasksService.getAllEmployees();
  }

  filterAssigned(task) {
    return task.employeeId !== null;
  }

  filterByEmployee(employeeId) {
    return (task) => {
      return task.employeeId === employeeId;
    };
  }
}

TeamController.$inject = ['TasksService'];

const TeamComponent = {
  template: template,
  controller: TeamController
};

export default TeamComponent;
