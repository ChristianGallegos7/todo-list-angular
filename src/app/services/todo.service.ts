import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { catchError, Observable } from 'rxjs';
import { TodoItem } from '../Models/TodoItem';
import { TodoItemRequest } from '../Models/TodoItemRequest';
import { TodoItemUpdateRequest } from '../Models/TodoItemUpdateRequest';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private _http = inject(HttpClient);
  private API_URL = "http://localhost:5000/api/Todo";


  constructor() { }


  public getAllTodos(): Observable<TodoItem[]> {
    return this._http.get<TodoItem[]>(this.API_URL)
      .pipe(
        catchError(this.handleError)
      );
  }

  public createTodo(todo: TodoItemRequest): Observable<TodoItem> {
    return this._http.post<TodoItem>(this.API_URL, todo)
      .pipe(
        catchError(this.handleError)
      );
  }

  public updateTodo(id: number, todo: TodoItemUpdateRequest): Observable<TodoItem> {
    return this._http.put<TodoItem>(`${this.API_URL}/${id}`, todo)
      .pipe(
        catchError(this.handleError)
      );
  }

  public deleteTodo(id: number): Observable<void> {
    return this._http.delete<void>(`${this.API_URL}/${id}`)
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(error: any): Observable<never> {
    console.error('An error occurred:', error);
    // Aquí podrías agregar lógica para mostrar mensajes de error al usuario
    throw error;
  }

}
