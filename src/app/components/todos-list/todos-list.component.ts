import { Component, Input, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoItem } from '@src/app/Models/TodoItem';
import { TodoService } from '@src/app/services/todo.service';

@Component({
  selector: 'app-todos-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './todos-list.component.html',
  styles: [`
    /* Aquí puedes agregar estilos específicos del componente si los necesitas */
  `]
})
export class TodosListComponent{
  todos:TodoItem[] = [];

  private service = inject(TodoService);

  constructor() {
    this.loadTodos();
  }


  loadTodos(){
    return this.service.getAllTodos().subscribe(data => {
      this.todos = data;
      console.log(this.todos);
    })
  }
}