import React from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "./routes";
import {LOGIN_ROUTE, TODO_LIST_ROUTE} from "../utils/consts";
import {About} from "../About";

const AppRouter = () => {
    const user = false;

    return user ? (
        <Switch>
            {privateRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true} />
            )}
            <Route path={'/about'} exact component={About} />
            <Redirect to={TODO_LIST_ROUTE} />
        </Switch>
    ) : (
        <Switch>
            {publicRoutes.map(({path, Component}) =>
                <Route path={path} component={Component} exact={true} />
            )}
            <Route path={'/about'} exact component={About} />
            <Redirect to={LOGIN_ROUTE} />
        </Switch>
    )
};

export default AppRouter;