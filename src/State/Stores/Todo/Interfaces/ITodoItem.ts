import TodoItemStatus from "../Constants/TodoItemStatus";

interface ITodoItem {
  id: string;
  content: string;
  status: TodoItemStatus;
}

export default ITodoItem;
