import { Injectable, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements OnDestroy{
  
  todos: Todo[] = [];
  storageListenSub: Subscription;
  constructor() {
    this.loadState();

    // listening to localstorage changes
    this.storageListenSub = fromEvent(window, 'storage').subscribe((event: StorageEvent) => {
      if(event.key === 'todos') this.loadState();
    })
  }
  
  ngOnDestroy() {
    if (this.storageListenSub) this.storageListenSub.unsubscribe();
  }

  getTodos() {
    return this.todos;
  }

  getTodo(id: string) {
    return this.todos.find(todo => todo.id === id);
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.saveState();
  }

  updateTodo(id: string, updatedTodoFields: Partial<Todo>) {
    const todo = this.getTodo(id);
    Object.assign(todo, updatedTodoFields);
    this.saveState();
  }

  deleteTodo(id: string) {
    const todoIndex = this.todos.findIndex(todo => todo.id === id);
    if(todoIndex == -1) return;
    this.todos.splice(todoIndex,1);
    this.saveState();
  }

  saveState() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadState() {
    try {
      const todosInStorage = JSON.parse(localStorage.getItem('todos'));
      const todosFromStorage = todosInStorage === null ? [] : todosInStorage;
      this.todos.length = 0;
      this.todos.push(...todosFromStorage);
    } catch(e) {
      console.log('There was an error retrieving the todos from localstorage!!');
      console.warn(e.message)
    }
  }
}
