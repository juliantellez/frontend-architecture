import ITodoItem from "./ITodoItem";

interface ITodoActions {
  addTodo: (todo: ITodoItem) => ITodoItem;
  removeTodo: (todo: ITodoItem) => ITodoItem;
}

export default ITodoActions;
