import createStore from "./Shared/createStore";
import Stores from "./Shared/Constants/Stores";

import Todo from "./Stores/Todo/Models/Todo";
import createTodoActions from "./Stores/Todo/Actions/createTodoActions";
import connectSubscriptions from "./connectSubscriptions";
import IState from "./Shared/Interfaces/IState";

const createState = () => {
  const state: IState = {
    [Stores.TODO]: createStore({
      model: Todo,
      name: Stores.TODO,
      actions: createTodoActions,
    })
  };

  connectSubscriptions(state);

  return state;
};

export default createState;
