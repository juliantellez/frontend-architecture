import * as React from "react";

import useObservable from "../../../../../State/Shared/Hooks/useObservable";
import StateContext from "../../../../../State/Shared/StateContext";

const TodoList = () => {
    const { TODO } = React.useContext(StateContext);
    const currentValue = useObservable(TODO.observable, TODO.getState());

    return (
        <div>
            <div>
                {currentValue.todoList.map((todo, key) => (
                    <div key={key}>
                        <div>ID: {todo.id}</div>
                        <div>Content: {todo.content}</div>
                        <div>Status: {todo.status}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoList;
