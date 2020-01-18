import { Subject } from "rxjs";

import UiEvent from "../Interfaces/UiEvent";

const createUiEvent = () => new Subject<UiEvent<any>>();

export default createUiEvent;
