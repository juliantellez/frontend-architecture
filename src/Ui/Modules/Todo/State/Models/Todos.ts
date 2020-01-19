import Todos from "../Interfaces/Todos";
import TodoItem from "../Interfaces/TodoItem";

class TodosModel implements Todos {
    public todosList: TodoItem[] = [];

    public get hasTodos(): boolean {
        return Boolean(this.todosList.length);
    }

    public getTodo(id: string): TodoItem {
        const index = this.todosList.findIndex(todo => todo.id === id);

        return this.todosList[index];
    }

    public getTodos(): TodoItem[] {
        return this.todosList;
    }
}

export default TodosModel;
