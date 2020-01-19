import { BehaviorSubject } from "rxjs";

import CreateStore from "./Interfaces/CreateStore";
import Store from "./Interfaces/Store";

const createStore = <Model, Actions>({
    name,
    model,
    actions,
    initialState = new model()
}: CreateStore<Model, Actions>): Store<Model, Actions> => {
    const observable = new BehaviorSubject(initialState);

    let currentState = initialState;

    observable.subscribe(nextState => (currentState = nextState));
    const getState = (): Model => Object.assign(new model(), currentState);

    return {
        name,
        model,
        getState,
        observable,
        actions: actions(observable, getState)
    };
};

export default createStore;
