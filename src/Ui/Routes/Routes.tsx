import { Route, Switch } from "react-router-dom";
import * as React from "react";

import RoutePath from "./Constants/RoutePath";

import Todo from "../Modules/Todo";
import Home from "../Modules/Home";

const Routes = (): JSX.Element => (
    <Switch>
        <Route path={RoutePath.TODO} component={Todo} />
        <Route component={Home} />
    </Switch>
);

export default Routes;
