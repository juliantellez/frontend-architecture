import { Subscription } from "rxjs";

import State from "./Shared/Interfaces/State";

import connectTodoSubscriptions from "../Ui/Modules/Todo/State/connectTodoSubscriptions";
import UiReactContext from "../Ui/Shared/Interfaces/UiReactContext";

const connectSubscriptions = (
    state: State,
    ui: UiReactContext
): Subscription[] => {
    return [...connectTodoSubscriptions(state, ui)];
};

export default connectSubscriptions;
