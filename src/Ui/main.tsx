import * as React from "react";
import * as ReactDOM from "react-dom";

import createState from "../State/createState";

const state = createState();
console.log(state);

const App = () => <div>hello</div>;

const container = document.getElementById("main");
ReactDOM.render(<App />, container);
