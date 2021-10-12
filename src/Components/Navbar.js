import React, {useContext} from 'react';
import {NavLink} from "react-router-dom";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

export const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-brand">Note App</div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02"
                    aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact>Главная</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/about">Информация</NavLink>
                    </li>
                </ul>
                {
                    user ?
                        <div className="user">
                            <div className="user-avatar">
                                {user.photoURL ? <img src={user.photoURL} alt=""/> : <i className="bi bi-person"></i>}
                            </div>
                            <div className="user-name">{user.displayName}</div>
                            <button className="btn btn-primary ml-3" onClick={()=>auth.signOut()}>Выйти</button>
                        </div>
                        : null
                }
            </div>
        </nav>
    )
};