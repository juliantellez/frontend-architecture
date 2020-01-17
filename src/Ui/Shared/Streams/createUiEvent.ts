import { Subject } from "rxjs";

import IUiEvent from "../Interfaces/IUiEvent";

const createUiEvent = () => new Subject<IUiEvent>();

export default createUiEvent;
