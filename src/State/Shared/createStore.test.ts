import { assert } from "chai";

import createStore from "./createStore";
import { Subject } from "rxjs";
import { skip } from "rxjs/operators";

/**
 * Create Store:
 * Stores and Immutable and reactive.
 * This Section describes a hypothetical increment store
 */
describe("Create store", () => {
    const DEFAULT_VALUE = 0;
    interface CounterActions {
        increment: () => void;
        reset: () => void;
    }

    class CounterModel {
        value = DEFAULT_VALUE;

        constructor(initialValue?: number) {
            this.value = initialValue ?? DEFAULT_VALUE;
        }
    }

    const actions = (getState: () => CounterModel): CounterActions => ({
        increment: (): void => {
            const state = getState();
            state.value += 1;
        },
        reset: (): void => {
            const state = getState();
            state.value = 0;
        }
    });

    /**
     * Minimal configuration
     */
    it("should create a store", () => {
        const store = createStore({
            name: "counter",
            model: CounterModel,
            actions
        });

        assert.exists(store.name);
        assert.exists(store.actions);
        assert.exists(store.getState);
        assert.exists(store.observable);
    });

    /**
     * Actions description
     */
    it("should update state through actions", () => {
        const store = createStore({
            name: "counter",
            model: CounterModel,
            actions
        });

        assert.deepEqual(store.getState(), { value: 0 });
        store.actions.increment();
        assert.deepEqual(store.getState(), { value: 1 });
        store.actions.increment();
        assert.deepEqual(store.getState(), { value: 2 });
        store.actions.reset();
        assert.deepEqual(store.getState(), { value: 0 });
        store.actions.increment();
        assert.deepEqual(store.getState(), { value: 1 });
        store.actions.increment();
        assert.deepEqual(store.getState(), { value: 2 });
    });

    /**
     * Observable subscription
     */
    it("should subscribe to store emissions", done => {
        const store = createStore({
            name: "counter",
            model: CounterModel,
            actions
        });

        store.observable.subscribe(() => done());
    });

    /**
     * Initial State
     */
    it("should accept a initial state", () => {
        const INITIAL_VALUE = 10;
        const initialState = new CounterModel(INITIAL_VALUE);

        const store = createStore({
            name: "counter",
            model: CounterModel,
            actions,
            initialState
        });

        assert.deepEqual(store.getState(), { value: 10 });
        store.actions.increment();
        assert.deepEqual(store.getState(), { value: 11 });
        store.actions.reset();
        assert.deepEqual(store.getState(), { value: 0 });
    });

    /**
     * Initial Observable
     */
    it("should accept a custom observable", done => {
        const observable = new Subject<CounterModel>();
        const SKIP_EMISSIONS = 2;

        const store = createStore({
            name: "counter",
            model: CounterModel,
            actions,
            observable: observable.pipe(skip(SKIP_EMISSIONS))
        });

        store.observable.subscribe(state => {
            assert.deepEqual(state, { value: 3 });
            assert.deepEqual(store.getState(), { value: 3 });
            done();
        });

        /**
         * Skip 2
         */
        store.actions.increment();
        store.actions.increment();
        /**
         * Emit
         */
        store.actions.increment();
    });
});
