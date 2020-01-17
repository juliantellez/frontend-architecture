import createStore from "./Shared/createStore";
import Stores from "./Shared/Contants/Stores";

import Todo from "./Stores/Todo/Models/Todo";
import createTodoActions from "./Stores/Todo/Actions/createTodoActions";


const createState = () => {
  return {
    todoStore: createStore({
        model: Todo,
        name: Stores.TODO,
        actions: createTodoActions,
    })
  };
};

export default createState;
