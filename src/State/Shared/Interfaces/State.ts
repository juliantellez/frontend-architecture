import TodoModel from "../../../Ui/Modules/Todo/State/Models/Todos";
import TodoActions from "../../../Ui/Modules/Todo/State/Interfaces/TodoActions";

import Store from "./Store";
import Stores from "../Constants/Stores";

interface State {
    TODO: Store<TodoModel, TodoActions, Stores.TODO>;
}

export default State;
