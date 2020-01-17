import { Subscription } from "rxjs";

import IState from "./Shared/Interfaces/IState";

import connectTodoSubscriptions from "./Stores/Todo/connectTodoSubscriptions";

const connectSubscriptions = (state: IState): Subscription[] => {
  return [...connectTodoSubscriptions(state)];
};

export default connectSubscriptions;
