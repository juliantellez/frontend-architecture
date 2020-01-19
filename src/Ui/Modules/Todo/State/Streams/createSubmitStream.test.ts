import { marbles } from "rxjs-marbles/mocha";

import UIEventCustom from "../../../../Shared/Constants/UIEventCustom";
import createSubmitStream from "./createSubmitStream";
import UiEvent from "../../../../Shared/Interfaces/UiEvent";

/**
 * Tests a stream of events
 * and its expected values over time
 */
describe("createSubmitStream", () => {
    it(
        "should emit event on user input",
        marbles(m => {
            const input = {
                a: {
                    type: UIEventCustom.TODO_SUBMIT
                } as UiEvent,
                b: {
                    type: UIEventCustom.TODO_SUBMIT,
                    data: {
                        todo: "baz"
                    }
                } as UiEvent
            };

            const output = {
                x: {
                    type: UIEventCustom.TODO_SUBMIT,
                    data: {
                        todo: "baz"
                    }
                } as UiEvent
            };

            const uiEvent$ = m.hot("-^-a-b-", input);
            const expected$ = m.hot("^---x-", output);

            m.expect(createSubmitStream(uiEvent$)).toBeObservable(expected$);
        })
    );
});
