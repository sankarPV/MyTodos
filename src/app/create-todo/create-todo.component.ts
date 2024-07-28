import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-todo',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-todo.component.html',
  styleUrl: './create-todo.component.css'
})
export class CreateTodoComponent {
    todoForm! : FormGroup;

    @Output() todoCreated = new EventEmitter<any>();

    constructor(private fb: FormBuilder) {
      this.todoForm = this.fb.group({
        name: ['', Validators.required],
        date: ['', Validators.required]
      });
    }

    onSubmit() {
      if(this.todoForm.valid) {
        this.todoCreated.emit(this.todoForm.value);
        this.todoForm.reset();
      }
    }
}
