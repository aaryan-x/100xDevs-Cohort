/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.tasks = [];
  }

  add(todo) {
    this.tasks.push(todo);
  }
  remove(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.tasks.length) {
      this.tasks.splice(indexOfTodo, 1)
    }
  }
  update(index, updatedTodo) {
    if (index >= 0 && index < this.tasks.length) {
      this.tasks[index] = updatedTodo;
    }

  }
  getAll() {
    return this.tasks;
  }
  clear() {
    this.tasks = [];
  }
  get(indexOfTodo) {
    if (indexOfTodo >= 0 && indexOfTodo < this.tasks.length) {
      return this.tasks[indexOfTodo];
    } else {
      return null;
    }
  }
}

module.exports = Todo;

