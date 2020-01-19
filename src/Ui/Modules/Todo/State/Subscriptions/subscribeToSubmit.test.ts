import { Subject } from "rxjs";
import { assert } from "chai";

import subscribeToSubmit from "./subscribeToSubmit";
import UiEvent from "../../../../Shared/Interfaces/UiEvent";
import UIEventCustom from "../../../../Shared/Constants/UIEventCustom";
import createState from "../../../../../State/createState";

/**
 * Tests the integration with the event emitter
 * and the state closure
 */
describe("subscribe to submit", () => {
    it("should create todo item on submit", () => {
        const uiEvent$ = new Subject<UiEvent>();
        const state = createState();

        const event: UiEvent = {
            type: UIEventCustom.TODO_SUBMIT,
            data: {
                todo: "foo"
            }
        };

        subscribeToSubmit(uiEvent$, state);
        uiEvent$.next(event);

        const currentState = state.TODO.getState();
        const TODOS_CREATED = 1;

        assert(currentState.hasTodos);
        assert(currentState.getTodos().length === TODOS_CREATED);
    });
});
