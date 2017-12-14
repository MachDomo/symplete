export default class TasksService {
  constructor($http) {
    this.http = $http;
    this.tasks = [];
    this.employees = [];

    // Bindings for methods
    this.getAllTasks = this.getAllTasks.bind(this);
    this.getAllEmployees = this.getAllEmployees.bind(this);
  }

  getAllTasks() {
    return this.http.get('/api/tasks').then((res) => {
      this.tasks = res.data;
    });
  }

  getAllEmployees() {
    return this.http.get('/api/employees').then((res) => {
      this.employees = res.data;
    });
  }

}
