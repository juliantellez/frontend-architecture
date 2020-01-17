import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";
import * as uuid from "uuid";

import IUiContext from "../../../Ui/Shared/Interfaces/IUiContext";

import IState from "../../Shared/Interfaces/IState";
import UIEventCustom from "../../../Ui/Shared/Constants/UIEventCustom";
import TodoItemStatus from "./Constants/TodoItemStatus";

const connectTodoSubscriptions = (
  state: IState,
  ui: IUiContext
): Subscription[] => {
  return [
    ui.uiEvent$
      .pipe(
        filter(({ type }) => type === UIEventCustom.TODO_SUBMIT),
        filter(({ event }) => Boolean(event.todo))
      )
      .subscribe(({ event }) => {
        state.TODO.actions.addTodo({
          id: uuid.v4(),
          content: event.todo,
          status: TodoItemStatus.OPEN
        });
      })
  ];
};

export default connectTodoSubscriptions;
