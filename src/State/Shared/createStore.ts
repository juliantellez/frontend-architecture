import { BehaviorSubject } from "rxjs";

import ICreateStore from "./Interfaces/ICreateStore";
import IStore from "./Interfaces/IStore";

const createStore = <Model, Actions>({
  name,
  model,
  actions,
  initialState = new model()
}: ICreateStore<Model, Actions>): IStore<Model, Actions> => {
  const observable = new BehaviorSubject(initialState);

  let currentState = initialState;

  observable.subscribe(nextState => (currentState = nextState));
  const getState = () => Object.assign(new model(), currentState);

  return {
    name,
    model,
    getState,
    observable,
    actions: actions(observable, getState)
  };
};

export default createStore;
