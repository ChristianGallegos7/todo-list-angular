import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TodoInputComponent } from "./components/todo-input/todo-input.component";
import { TodosListComponent } from './components/todos-list/todos-list.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TodoInputComponent, TodosListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'todo-list-angular';
}
