import { BehaviorSubject } from "rxjs";

import Stores from "../Constants/Stores";

interface Store<Model, Actions> {
    name: Stores;
    getState: () => Model;
    observable: BehaviorSubject<Model>;
    actions: Actions;
}

export default Store;
