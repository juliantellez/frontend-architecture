import Newable from "./Newable";
import { Observable } from "rxjs";

interface CreateStore<Model, Actions, StoreName> {
    name: StoreName;
    model: Newable<Model>;
    actions: (getState: () => Model) => Actions;
    initialState?: Model;
    observable?: Observable<Model>;
}

export default CreateStore;
