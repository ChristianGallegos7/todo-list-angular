import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../Models/TodoItem';
import { TodoItemRequest } from '../Models/TodoItemRequest';
import { TodoItemUpdateRequest } from '../Models/TodoItemUpdateRequest';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _http = inject(HttpClient);
  private API_URL = "http://localhost:5000/api/todos"


  constructor() { }


  public getAllTodos(): Observable<TodoItem[]> {
    return this._http.get<TodoItem[]>(this.API_URL);
  }

  public createTodo(todo: TodoItemRequest): Observable<TodoItem> {
    return this._http.post<TodoItem>(this.API_URL, todo);
  }

  public updateTodo(id: number, todo: TodoItemUpdateRequest): Observable<TodoItem> {
    return this._http.put<TodoItem>(`${this.API_URL}/${id}`, todo);
  }

  public deleteTodo(id: number): Observable<void>{
    return this._http.delete<void>(`${this.API_URL}/${id}`);
  }

}
