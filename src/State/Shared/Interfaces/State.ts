import TodoModel from "../../../Ui/Modules/Todo/State/Models/Todos";
import TodoActions from "../../../Ui/Modules/Todo/State/Interfaces/TodoActions";

import Store from "./Store";

interface State {
    TODO: Store<TodoModel, TodoActions>;
}

export default State;
