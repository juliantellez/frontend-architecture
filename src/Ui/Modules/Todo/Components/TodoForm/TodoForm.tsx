import * as React from "react";

import UiContext from "../../../../Shared/UiContext";
import UIEventCustom from "../../../../Shared/Constants/UIEventCustom";

import * as styles from "./TodoForm.scss";

const TodoForm = (): JSX.Element => {
    const { uiEvent$ } = React.useContext(UiContext);
    const [todo, updateTodo] = React.useState("");

    const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault();
        uiEvent$.next({
            type: UIEventCustom.TODO_SUBMIT,
            data: {
                todo
            }
        });
    };

    return (
        <form className={styles.form} onSubmit={onSubmit}>
            <textarea
                placeholder="What's on your mind?"
                className={styles.formInput}
                value={todo}
                onChange={(e): void => updateTodo(e.target.value)}
            />
            <button className={styles.formSubmit}>Add Task</button>
        </form>
    );
};

export default TodoForm;
