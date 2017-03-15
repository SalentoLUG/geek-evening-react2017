import { extendObservable } from 'mobx';

class TodoListStore {
  constructor() {
    extendObservable(this, {todos: []});
  }

  addTodo(msg) {
    this.todos.push(msg);
  }
}

export default TodoListStore;
