import angular from 'angular';

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

angular.module('app', []);
