import {LOGIN_ROUTE, TODO_LIST_ROUTE} from "../utils/consts";
import {Login} from "../pages/Login";
import {Home} from "../pages/Home";

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: Login
    }
];

export const privateRoutes = [
    {
        path: TODO_LIST_ROUTE,
        Component: Home
    }
];