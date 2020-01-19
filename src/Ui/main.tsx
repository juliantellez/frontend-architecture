import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import connectSubscriptions from "../State/connectSubscriptions";
import StateContext from "../State/Shared/StateContext";
import UiContext from "./Shared/UiContext";
import Routes from "./Routes";

const App = (): JSX.Element => {
    const state = React.useContext(StateContext);
    const ui = React.useContext(UiContext);

    React.useEffect(() => {
        const subscriptions = connectSubscriptions(state, ui);

        return (): void => {
            subscriptions.forEach(subscription => {
                subscription.unsubscribe();
            });
        };
    });

    return (
        <Router>
            <Routes />
        </Router>
    );
};

const container = document.getElementById("main");
ReactDOM.render(<App />, container);
