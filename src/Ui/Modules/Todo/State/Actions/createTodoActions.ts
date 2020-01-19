import TodoModel from "../Models/Todos";
import TodoActions from "../Interfaces/TodoActions";
import TodoItem from "../Interfaces/TodoItem";

const createTodoActions = (getState: () => TodoModel): TodoActions => ({
    addTodo(todo: TodoItem): TodoItem {
        const state = getState();

        state.todosList = [...state.todosList, todo];

        return todo;
    },

    removeTodo(currentTodo: TodoItem): TodoItem {
        const state = getState();

        const index = state.todosList.findIndex(
            todo => todo.id === currentTodo.id
        );

        const DELETE_COUNT = 1;
        state.todosList = state.todosList.splice(index, DELETE_COUNT);

        return currentTodo;
    }
});

export default createTodoActions;
