import { BehaviorSubject } from "rxjs";

import Stores from "./Contants/Stores";

type INewable<T> = new (...args: any[]) => T;

interface ICreateStore<Model, Actions> {
  name: Stores;
  model: INewable<Model>;
  actions: (
    observable: BehaviorSubject<Model>,
    getState: () => Model
  ) => Actions;
  initialState?: Model;
}

const createStore = <Model, Actions>({
  name,
  model,
  actions,
  initialState = new model()
}: ICreateStore<Model, Actions>) => {
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
