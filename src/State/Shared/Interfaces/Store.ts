import { BehaviorSubject } from "rxjs";

import Stores from "../Constants/Stores";
import Newable from "./Newable";

interface Store<Model, Actions> {
    name: Stores;
    model: Newable<Model, unknown>;
    getState: () => Model;
    observable: BehaviorSubject<Model>;
    actions: Actions;
}

export default Store;
