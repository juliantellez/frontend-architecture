import { BehaviorSubject } from "rxjs";

import TodoModel from "../Models/Todos";
import TodoActions from "../Interfaces/TodoActions";
import TodoItem from "../Interfaces/TodoItem";

const createTodoActions = (
    todo$: BehaviorSubject<TodoModel>,
    getState: () => TodoModel
): TodoActions => ({
    addTodo(todo: TodoItem) {
        const state = getState();
        state.todoList.push(todo);

        todo$.next(Object.assign(new TodoModel(), state));

        return todo;
    },

    removeTodo(currentTodo: TodoItem) {
        const state = getState();

        const index = state.todoList.findIndex(
            todo => todo.id === currentTodo.id
        );

        const DELETE_COUNT = 1;
        state.todoList.splice(index, DELETE_COUNT);

        todo$.next(Object.assign(new TodoModel(), state));

        return currentTodo;
    }
});

export default createTodoActions;
