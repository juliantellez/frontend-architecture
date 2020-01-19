import * as React from "react";

import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

import * as styles from "./TodoView.scss";

const TodoView = (): JSX.Element => {
    return (
        <section className={styles.section}>
            <TodoForm />
            <TodoList />
        </section>
    );
};

export default TodoView;
