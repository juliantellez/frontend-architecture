import * as uuid from "uuid";
import { Subscription, Observable } from "rxjs";

import TodoItemStatus from "../Constants/TodoItemStatus";
import State from "../../../../../State/Shared/Interfaces/State";
import UiEvent from "../../../../Shared/Interfaces/UiEvent";

/**
 * Subscribe to UIEventCustom.TODO_SUBMIT
 */
const subscribeToSubmit = (
    uiEvent$: Observable<UiEvent>,
    state: State
): Subscription =>
    uiEvent$.subscribe(({ data }) => {
        state.TODO.actions.addTodo({
            id: uuid.v4(),
            content: data.todo,
            status: TodoItemStatus.OPEN
        });
    });

export default subscribeToSubmit;
