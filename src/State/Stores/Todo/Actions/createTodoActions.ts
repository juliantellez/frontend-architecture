import { BehaviorSubject } from "rxjs";

import Todo from "../Models/Todo";
import ITodoActions from "../Interfaces/ITodoActions";
import ITodoItem from "../Interfaces/ITodoItem";

const createTodoActions = (
  todo$: BehaviorSubject<Todo>,
  getState: () => Todo
): ITodoActions => ({
  addTodo(todo: ITodoItem) {
    const state = getState();
    state.todoList.push(todo);

    todo$.next(Object.assign(new Todo(), state));

    return todo;
  },

  removeTodo(currentTodo: ITodoItem) {
    const state = getState();

    const index = state.todoList.findIndex(todo => todo.id === currentTodo.id);
    state.todoList.splice(index, 1);

    todo$.next(Object.assign(new Todo(), state));

    return currentTodo;
  }
});

export default createTodoActions;
