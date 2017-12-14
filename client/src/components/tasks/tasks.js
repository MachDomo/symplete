import angular from 'angular';

import template from './tasks.html';
import './tasks.css';



class TasksController {
  constructor(TasksService) {
    this.TasksService = TasksService;
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
