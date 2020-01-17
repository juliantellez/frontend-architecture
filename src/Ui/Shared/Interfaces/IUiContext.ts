import { Subject } from "rxjs";

import IUiEvent from "./IUiEvent";

interface IUiContext {
  uiEvent$: Subject<IUiEvent>;
}

export default IUiContext;
