import * as React from "react";

import createUiEvent from "./Streams/createUiEvent";
import UiReactContext from "./Interfaces/UiReactContext";

const context: UiReactContext = {
    uiEvent$: createUiEvent()
};

const UiContext = React.createContext(context);

export default UiContext;
