import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CreateTodoComponent } from './create-todo/create-todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CreateTodoComponent, TodoListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyTodos';
  todos: { name: string, date: string }[] = [];

  addTodo(todo: {name: string, date: string}) {
    this.todos.push(todo);
  }
}
