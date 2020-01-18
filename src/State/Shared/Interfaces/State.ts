import TodoModel from "../../Stores/Todo/Models/Todos";
import TodoActions from "../../Stores/Todo/Interfaces/TodoActions";

import Store from "./Store";

interface State {
  TODO: Store<TodoModel, TodoActions>;
}

export default State;
