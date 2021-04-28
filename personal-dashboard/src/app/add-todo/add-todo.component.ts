import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { NotificationService } from '../shared/notification.service';
import { Todo } from '../shared/todo.model';
import { TodoService } from '../shared/todo.service';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  showValidationErrors: boolean;
  constructor(private todoService: TodoService,
    private route: Router,
    private notificationService: NotificationService
  ) { }

  ngOnInit(): void {
  }

  onFormSubmit(form: NgForm) {
    if (form.invalid) return this.showValidationErrors = true;
    const todo = new Todo(form.value.text);
    this.todoService.addTodo(todo);
    this.route.navigateByUrl("/todos");
    this.notificationService.show('Created Todo!')
  }

}
