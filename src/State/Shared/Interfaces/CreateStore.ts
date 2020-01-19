import { BehaviorSubject } from "rxjs";

import Stores from "../Constants/Stores";
import Newable from "./Newable";

interface CreateStore<Model, Actions> {
    name: Stores;
    model: Newable<Model, unknown>;
    actions: (
        observable: BehaviorSubject<Model>,
        getState: () => Model
    ) => Actions;
    initialState?: Model;
}

export default CreateStore;
