import angular from 'angular';

import template from './tasks.html';
import './tasks.css';



class TasksController {
  constructor() {
  }
}

TasksController.$inject = [];

const TasksComponent = {
  template: template,
  controller: TasksController
};

export default TasksComponent;
