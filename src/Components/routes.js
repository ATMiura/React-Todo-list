import {ABOUT_ROUTE, LOGIN_ROUTE, TODO_LIST_ROUTE} from "../utils/consts";
import {Login} from "../pages/Login";
import {Home} from "../pages/Home";
import {About} from "../About";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    },
    {
        path: ABOUT_ROUTE,
        Component: About
    },
];

export const privateRoutes = [
    {
        path: TODO_LIST_ROUTE,
        Component: Home
    },
];