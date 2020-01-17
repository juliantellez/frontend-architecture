import ITodo from "../Interfaces/ITodo";
import ITodoItem from "../Interfaces/ITodoItem";

class Todo implements ITodo {
  public todoList: ITodoItem[] = [];

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

export default Todo;
