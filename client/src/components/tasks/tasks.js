import angular from 'angular';

import template from './tasks.html';
import './tasks.css';



class TasksController {
  constructor(TasksService) {
    this.TasksService = TasksService;
    this.unassignedTasks = [];

    this.submitForm = this.submitForm.bind(this);
  }

  filterUnassigned(task) {
    return task.employeeId === null;
  }

  $onInit() {
    this.TasksService.getAllTasks();
  }

  submitForm() {
    this.TasksService.createTask({title: this.title, description: this.description}).then(() => {
      this.title = '';
      this.description = '';
    });
  }

}

TasksController.$inject = ['TasksService'];

const TasksComponent = {
  template: template,
  controller: TasksController
};

export default TasksComponent;
