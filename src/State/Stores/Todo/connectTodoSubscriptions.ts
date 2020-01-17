import { Subscription } from "rxjs";
import { filter } from "rxjs/operators";

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
      .pipe(filter(({ type }) => type === UIEventCustom.ON_CLICK_TODO_CREATE))
      .subscribe(() => {
        state.TODO.actions.addTodo({
          id: Math.random().toString(),
          content: "hello",
          status: TodoItemStatus.OPEN
        });
      })
  ];
};

export default connectTodoSubscriptions;
