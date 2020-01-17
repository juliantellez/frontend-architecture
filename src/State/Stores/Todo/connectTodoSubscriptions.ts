import { Subscription } from "rxjs";

import IState from "../../Shared/Interfaces/IState";

const connectTodoSubscriptions = (state: IState): Subscription[] => {
  return [state.TODO.observable.subscribe(console.log)];
};

export default connectTodoSubscriptions;
