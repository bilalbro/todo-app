const LS_TODO_TASKS_KEY = 'todoTasks';

class TaskManager {
   static createTask(name) {
      return {
         id: Number(new Date()),
         name,
         completed: false,
      }
   }

   constructor() {
      this.tasks = [];
      this.init();
   }

   init() {
      var todoTasksLocalStorage = localStorage.getItem(LS_TODO_TASKS_KEY);
      if (todoTasksLocalStorage) {
         this.tasks = JSON.parse(todoTasksLocalStorage);
      }
   }

   updateTasksLocalStorage() {
      localStorage.setItem(LS_TODO_TASKS_KEY, JSON.stringify(this.tasks));
   }

   getTasks() {
      return [...this.tasks];
   }

   addTask(task) {
      this.tasks.unshift(task);
      this.updateTasksLocalStorage();
   }

   indexOfTask(taskId) {
      return this.tasks.findIndex(task => task.id === taskId);
   }

   removeTask(taskId) {
      this.tasks.splice(this.indexOfTask(taskId), 1);
      this.updateTasksLocalStorage();
   }

   updateTask(taskId, taskName) {
      this.tasks[this.indexOfTask(taskId)].name = taskName;
      this.updateTasksLocalStorage();
   }

   toggleTaskCompletion(taskId) {
      var index = this.indexOfTask(taskId);
      this.tasks[index].completed = !(this.tasks[index].completed);
      this.updateTasksLocalStorage();
   }

   clearTasks() {
      this.tasks = [];
      this.updateTasksLocalStorage();
   }
}

export default TaskManager;