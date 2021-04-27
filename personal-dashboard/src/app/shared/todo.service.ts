import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  
  todos: Todo[] = [
    new Todo('This is todo!!'),
    new Todo('hey!!!')
  ]
  constructor() {}
  
  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find(todo => todo.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
  }

  updateTodo(id: string, updatedTodoFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    Object.assign(todo, updatedTodoFields);
  }

  deleteTodo(id: string) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if(todoIndex == -1) return;
    this.todos.splice(todoIndex,1);
  }
}
