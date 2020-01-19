import * as React from "react";

import TodoForm from "../TodoForm";
import TodoList from "../TodoList";

const TodoView = (): JSX.Element => {
    return (
        <main>
            <TodoForm />
            <TodoList />
        </main>
    );
};

export default TodoView;
