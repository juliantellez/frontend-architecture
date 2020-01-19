import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import * as uuid from "uuid";

import UiReactContext from "../../../Shared/Interfaces/UiReactContext";

import State from "../../../../State/Shared/Interfaces/State";
import UIEventCustom from "../../../Shared/Constants/UIEventCustom";
import TodoItemStatus from "./Constants/TodoItemStatus";

const connectTodoSubscriptions = (
    state: State,
    ui: UiReactContext
): Subscription[] => {
    return [
        ui.uiEvent$
            .pipe(
                filter(({ type }) => type === UIEventCustom.TODO_SUBMIT),
                filter(({ data }) => Boolean(data.todo))
            )
            .subscribe(({ data }) => {
                state.TODO.actions.addTodo({
                    id: uuid.v4(),
                    content: data.todo,
                    status: TodoItemStatus.OPEN
                });
            })
    ];
};

export default connectTodoSubscriptions;
