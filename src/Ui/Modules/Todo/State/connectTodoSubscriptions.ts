import { Subscription } from "rxjs";

import UiReactContext from "../../../Shared/Interfaces/UiReactContext";

import State from "../../../../State/Shared/Interfaces/State";
import subscribeToSubmit from "./Subscriptions/subscribeToSubmit";
import createSubmitStream from "./Streams/createSubmitStream";

const connectTodoSubscriptions = (
    state: State,
    ui: UiReactContext
): Subscription[] => {
    return [subscribeToSubmit(createSubmitStream(ui.uiEvent$), state)];
};

export default connectTodoSubscriptions;
