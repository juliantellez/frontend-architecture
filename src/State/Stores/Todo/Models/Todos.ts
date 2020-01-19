import Todos from "../Interfaces/Todos";
import TodoItem from "../Interfaces/TodoItem";

class TodosModel implements Todos {
    public todoList: TodoItem[] = [];

    public get hasTodos(): boolean {
        return Boolean(this.todoList.length);
    }

    public getTodo(id: string): TodoItem {
        const index = this.todoList.findIndex(todo => todo.id === id);

        return this.todoList[index];
    }

    public getTodos(): TodoItem[] {
        return this.todoList;
    }
}

export default TodosModel;
