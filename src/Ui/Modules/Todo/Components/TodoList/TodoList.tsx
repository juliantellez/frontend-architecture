import * as React from "react";

import useObservable from "../../../../../State/Shared/Hooks/useObservable";
import StateContext from "../../../../../State/Shared/StateContext";

import * as styles from "./TodoList.scss";

const TodoList = (): JSX.Element => {
    const { TODO } = React.useContext(StateContext);
    const currentValue = useObservable(TODO.observable, TODO.getState());

    return (
        <div className={styles.container}>
            {currentValue.todosList.map((todo, key) => (
                <div className={styles.item} key={key}>
                    <div className={styles.itemContent}>
                        Content: {todo.content}
                    </div>
                    <div className={styles.itemStatus}>
                        Status: {todo.status}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default TodoList;
