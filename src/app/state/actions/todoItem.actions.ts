import { createAction, props } from "@ngrx/store";
import { TodoItem } from "@src/app/Models/TodoItem";

export const createTodo = createAction('[TodoInput Component] Create');

export const loadTodos = createAction(
    '[TodosList Component] Load',
    props<{ todos: TodoItem[] }>()
);