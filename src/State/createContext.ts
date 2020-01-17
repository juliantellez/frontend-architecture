import * as React from "react";

import createState from "./createState";

const state = createState();

const StateContext = React.createContext(state);

export default StateContext;
