import { BehaviorSubject } from "rxjs";

import Stores from "../Constants/Stores";
import INewable from "./INewable";

interface ICreateStore<Model, Actions> {
  name: Stores;
  model: INewable<Model>;
  actions: (
    observable: BehaviorSubject<Model>,
    getState: () => Model
  ) => Actions;
  initialState?: Model;
}

export default ICreateStore;
