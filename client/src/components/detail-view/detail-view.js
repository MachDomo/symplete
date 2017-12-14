import angular from 'angular';

import template from './detail-view.html';
import './detail-view.css';

class DetailViewController {
  constructor(TasksService) {
    this.TasksService = TasksService;
    this.filterByEmployee = this.filterByEmployee.bind(this);
  }

  filterByEmployee(task) {
    return task.employeeId === this.TasksService.selectedEmployee.id;
  }
}

DetailViewController.$inject = ['TasksService'];

const DetailViewComponent = {
  template: template,
  controller: DetailViewController
};

export default DetailViewComponent;
