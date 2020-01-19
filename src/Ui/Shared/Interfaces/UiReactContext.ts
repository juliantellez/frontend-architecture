import { Subject } from "rxjs";

import UiEvent from "./UiEvent";

interface UiReactContext {
    uiEvent$: Subject<UiEvent>;
}

export default UiReactContext;
