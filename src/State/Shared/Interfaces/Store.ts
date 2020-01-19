import { Observable } from "rxjs";

interface Store<Model, Actions, StoreName> {
    name: StoreName;
    getState: () => Model;
    observable: Observable<Model>;
    actions: Actions;
}

export default Store;
