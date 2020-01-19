import TodoItem from "./TodoItem";

interface TodoActions {
    addTodo: (todo: TodoItem) => TodoItem;
    removeTodo: (todo: TodoItem) => TodoItem;
}

export default TodoActions;
