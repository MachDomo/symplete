import angular from 'angular';

import template from './tasks.html';
import './tasks.css';



class TasksController {
  constructor(TasksService) {
    this.TasksService = TasksService;
    this.unassignedTasks = [];
  }

  filterUnassigned(task) {
    return task.employeeId === null;
  }

  $onInit() {
    this.TasksService.getAllTasks();
  }


}

TasksController.$inject = ['TasksService'];

const TasksComponent = {
  template: template,
  controller: TasksController
};

export default TasksComponent;
