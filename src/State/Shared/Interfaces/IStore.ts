import { BehaviorSubject } from "rxjs";

import Stores from "../Constants/Stores";
import INewable from "./INewable";

interface IStore<Model, Actions> {
  name: Stores;
  model: INewable<Model>;
  getState: () => Model;
  observable: BehaviorSubject<Model>;
  actions: Actions
}

export default IStore;
