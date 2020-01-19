import createStore from "./Shared/createStore";
import Stores from "./Shared/Constants/Stores";

import TodosModel from "../Ui/Modules/Todo/State/Models/Todos";
import createTodoActions from "../Ui/Modules/Todo/State/Actions/createTodoActions";
import State from "./Shared/Interfaces/State";

const createState = (): State => {
    const state: State = {
        [Stores.TODO]: createStore({
            model: TodosModel,
            name: Stores.TODO,
            actions: createTodoActions
        })
    };

    return state;
};

export default createState;
