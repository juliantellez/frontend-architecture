import * as React from "react";

import UiContext from "../../../../Shared/UiContext";
import UIEventCustom from "../../../../Shared/Constants/UIEventCustom";

import * as styles from "./TodoForm.scss";

const TodoForm = () => {
  const { uiEvent$ } = React.useContext(UiContext);
  const [todo, updateTodo] = React.useState("");

  return (
    <form
      className={styles.main}
      onSubmit={event => {
        event.preventDefault();
        uiEvent$.next({
          type: UIEventCustom.TODO_SUBMIT,
          event: {
            todo
          }
        });
      }}
    >
      <label>What&apos;s on your mind?</label>
      <input
        type="text"
        value={todo}
        onChange={e => updateTodo(e.target.value)}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};

export default TodoForm;
