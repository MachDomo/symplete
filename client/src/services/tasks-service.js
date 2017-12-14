export default class TasksService {
  constructor($http) {
    this.$inject = ['$http'];
    this.http = $http;
    this.tasks = [];
    this.employees = [];

    // Bindings for methods
    this.getAllTasks = this.getAllTasks.bind(this);
    this.getAllEmployees = this.getAllEmployees.bind(this);
    this.getTasksByEmployee = this.getTasksByEmployee.bind(this);
    this.addTaskToEmployee = this.addTaskToEmployee.bind(this);
    this.removeTask = this.removeTask.bind(this);
  }

  getAllTasks() {
    return this.http.get('/api/tasks').then((res) => {
      console.log('tasks', res);
      this.tasks = res.data;
    });
  }

  getAllEmployees() {
    return this.http.get('/api/employees').then((res) => {
      this.employees = res.data;
    });
  }

  getTasksByEmployee(employeeId) {
    return this.http.get(`/api/tasks/${employeeId}`);
  }

  addTaskToEmployee(taskId, employeeId) {
    return this.http.put(`/api/tasks/${taskId}`, {employeeId: employeeId}).then(() => {
      this.getAllTasks();
    })
  }

  removeTask(taskId) {
    return this.http.put(`/api/tasks/${taskId}/remove`).then(() => {
      this.getAllTasks();
    })
  }


}
