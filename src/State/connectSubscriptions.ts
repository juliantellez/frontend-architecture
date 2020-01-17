import { Subscription } from "rxjs";

import IState from "./Shared/Interfaces/IState";

import connectTodoSubscriptions from "./Stores/Todo/connectTodoSubscriptions";
import IUiContext from "../Ui/Shared/Interfaces/IUiContext";

const connectSubscriptions = (
  state: IState,
  ui: IUiContext
): Subscription[] => {
  return [...connectTodoSubscriptions(state, ui)];
};

export default connectSubscriptions;
