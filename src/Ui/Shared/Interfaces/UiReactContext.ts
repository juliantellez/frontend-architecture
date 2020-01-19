import { Subject } from "rxjs";

import UiEvent from "./UiEvent";

interface UiReactContext {
    uiEvent$: Subject<UiEvent<any>>;
}

export default UiReactContext;
