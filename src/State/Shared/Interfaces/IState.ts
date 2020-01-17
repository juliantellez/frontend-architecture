import Todo from "../../Stores/Todo/Models/Todo";
import ITodoActions from "../../Stores/Todo/Interfaces/ITodoActions";

import IStore from "./IStore";

interface IState {
  TODO: IStore<Todo, ITodoActions>;
}

export default IState;
