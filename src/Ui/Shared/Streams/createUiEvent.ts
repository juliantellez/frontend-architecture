import { Subject } from "rxjs";

import UiEvent from "../Interfaces/UiEvent";

const createUiEvent = (): Subject<UiEvent> => new Subject<UiEvent>();

export default createUiEvent;
