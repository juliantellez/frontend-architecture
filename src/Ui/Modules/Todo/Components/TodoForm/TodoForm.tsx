import * as React from "react";

import UiContext from "../../../../Shared/UiContext";
import UIEventCustom from "../../../../Shared/Constants/UIEventCustom";

import * as styles from "./TodoForm.scss";

const TodoForm = (): JSX.Element => {
    const { uiEvent$ } = React.useContext(UiContext);
    const [todo, updateTodo] = React.useState("");

    return (
        <form
            className={styles.main}
            onSubmit={(event): void => {
                event.preventDefault();
                uiEvent$.next({
                    type: UIEventCustom.TODO_SUBMIT,
                    data: {
                        todo
                    }
                });
            }}
        >
            <label>What&apos;s on your mind?</label>
            <input
                type="text"
                value={todo}
                onChange={(e): void => updateTodo(e.target.value)}
            />
            <input type="submit" value="Submit" />
        </form>
    );
};

export default TodoForm;
