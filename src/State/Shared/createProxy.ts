/* eslint-disable @typescript-eslint/no-explicit-any */

import { Subject } from "rxjs";

import Newable from "./Interfaces/Newable";

const createProxy = <Model extends object>(
    state: Model,
    model: Newable<Model>,
    observable: Subject<Model>
): Model => {
    const handler = {
        set: function(state: any, key: PropertyKey, value: any): boolean {
            state[key] = value;

            const nextState = Object.assign(new model(), state);
            observable.next(nextState);

            return true;
        }
    };

    return new Proxy<Model>(state, handler);
};

export default createProxy;
