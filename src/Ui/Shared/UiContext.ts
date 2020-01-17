import * as React from "react";

import createUiEvent from "./Streams/createUiEvent";
import IUiContext from "./Interfaces/IUiContext";

const context: IUiContext = {
  uiEvent$: createUiEvent()
};

const UiContext = React.createContext(context);

export default UiContext;
