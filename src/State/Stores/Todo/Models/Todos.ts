import Todos from "../Interfaces/Todos";
import TodoItem from "../Interfaces/TodoItem";

class TodosModel implements Todos {
  public todoList: TodoItem[] = [];

  public get hasTodos() {
    return Boolean(this.todoList.length);
  }

  public getTodo(id: string) {
    const index = this.todoList.findIndex(todo => todo.id === id);

    return this.todoList[index];
  }

  public getTodos() {
    return this.todoList;
  }
}

export default TodosModel;
