import { BehaviorSubject } from "rxjs";

import Todo from "./Models/Todo";
import createTodoActions from "./Actions/createTodoActions";

const createTodoStore = (initialState: Todo = new Todo()) => {
  const observable = new BehaviorSubject(initialState);
  let currentState = initialState;

  observable.subscribe(nextState => (currentState = nextState));
  const getState = () => Object.assign(new Todo(), currentState);

  return {
    name: "Todo",
    model: Todo,
    getState,
    observable,
    actions: createTodoActions(observable, getState),
  };

};

export default createTodoStore;
