import TodoItem from "./TodoItem";

interface Todos {
    todosList: TodoItem[];
    hasTodos: boolean;
    getTodo: (id: string) => TodoItem;
    getTodos: () => TodoItem[];
}

export default Todos;
