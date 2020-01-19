import TodoItemStatus from "../Constants/TodoItemStatus";

interface TodoItem {
    id: string;
    content: string;
    status: TodoItemStatus;
}

export default TodoItem;
