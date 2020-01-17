import * as React from "react";
import * as ReactDOM from "react-dom";

import TodoList from "./Routes/Todo/Components/TodoList";
import TodoForm from "./Routes/Todo/Components/TodoForm/TodoForm";

import connectSubscriptions from "../State/connectSubscriptions";
import StateContext from "../State/Shared/StateContext";
import UiContext from "./Shared/UiContext";

const App = () => {
  const state = React.useContext(StateContext);
  const ui = React.useContext(UiContext);

  React.useEffect(() => {
    connectSubscriptions(state, ui);
  });

  return (
    <main>
      <TodoForm />
      <TodoList />
    </main>
  );
};

const container = document.getElementById("main");
ReactDOM.render(<App />, container);
