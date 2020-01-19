import { BehaviorSubject } from "rxjs";

import CreateStore from "./Interfaces/CreateStore";
import Store from "./Interfaces/Store";
import createProxy from "./createProxy";

const createStore = <Model, Actions, StoreName>({
    name,
    model,
    actions,
    initialState = new model(),
    observable = new BehaviorSubject(initialState)
}: CreateStore<Model, Actions, StoreName>): Store<
    Model,
    Actions,
    StoreName
> => {
    const state = createProxy(initialState, model, observable);

    const getInternalState = (): Model => state;
    const getState = (): Model => Object.assign(new model(), state);

    return {
        name,
        getState,
        observable,
        actions: actions(getInternalState)
    };
};

export default createStore;
