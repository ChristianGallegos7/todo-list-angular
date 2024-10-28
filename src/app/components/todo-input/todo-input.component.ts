import { Component, EventEmitter, inject, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { createTodo } from '@src/app/state/actions/todoItem.actions';


@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [],
  templateUrl: './todo-input.component.html',
})
export class TodoInputComponent {

  private store = inject(Store);

  public addTodo() {
    this.store.dispatch(createTodo())
  }

}
