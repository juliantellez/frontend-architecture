import { BehaviorSubject } from "rxjs";

import TodoModel from "../Models/Todos";
import TodoActions from "../Interfaces/TodoActions";
import TodoItem from "../Interfaces/TodoItem";

const createTodoActions = (
    todo$: BehaviorSubject<TodoModel>,
    getState: () => TodoModel
): TodoActions => ({
    addTodo(todo: TodoItem): TodoItem {
        const state = getState();
        state.todosList.push(todo);

        todo$.next(Object.assign(new TodoModel(), state));

        return todo;
    },

    removeTodo(currentTodo: TodoItem): TodoItem {
        const state = getState();

        const index = state.todosList.findIndex(
            todo => todo.id === currentTodo.id
        );

        const DELETE_COUNT = 1;
        state.todosList.splice(index, DELETE_COUNT);

        todo$.next(Object.assign(new TodoModel(), state));

        return currentTodo;
    }
});

export default createTodoActions;
