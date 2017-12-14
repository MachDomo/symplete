import angular from 'angular';

import TasksComponent from './components/tasks/tasks';
import TeamComponent from './components/team-members/team-members';
import DetailViewComponent from './components/detail-view/detail-view';
import TasksService from './services/tasks-service';


import template from './app.html';
import './app.css';



class AppController {
  constructor() {
  }
}

AppController.$inject = [];

const AppComponent = {
  template: template,
  controller: AppController
};

angular.module('app', [])
  .component('app', AppComponent)
  .component('tasks', TasksComponent)
  .component('team', TeamComponent)
  .component('detailView', DetailViewComponent)
  .service('TasksService', TasksService);
