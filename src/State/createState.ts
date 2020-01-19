import createStore from "./Shared/createStore";
import Stores from "./Shared/Constants/Stores";

import TodosModel from "./Stores/Todo/Models/Todos";
import createTodoActions from "./Stores/Todo/Actions/createTodoActions";
import State from "./Shared/Interfaces/State";

const createState = () => {
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
