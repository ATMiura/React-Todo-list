import React, {useContext} from 'react';
import {Context} from "../index";
import firebase from "firebase";

export const login = async (auth) => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const {user} = await auth.signInWithPopup(provider);
    console.log(user);
    console.log(user.displayName);
};

export const Login = () => {
    const {auth} = useContext(Context);

    return (
        <>
            <div className="row">
                <div className="col-12 d-flex justify-content-center">
                    <button className="btn btn-primary" onClick={()=>login(auth)}>Войти с помощью Google</button>
                </div>
            </div>
            {/*<form>
                <div className="form-row mb-3">
                    <div className="col-sm-4 offset-sm-4 col-12">
                        <label htmlFor="inputEmail4">Логин</label>
                        <input type="text" className="form-control" id="inputEmail4" />
                    </div>
                </div>
                <div className="form-row mb-3">
                    <div className="col-sm-4 offset-sm-4 col-12">
                        <label htmlFor="exampleInputPassword1">Пароль</label>
                        <input type="password" className="form-control" id="exampleInputPassword1"/>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-sm-4 offset-sm-4 col-12">
                        <button type="submit" className="btn btn-primary mb-2">Войти</button>
                    </div>
                </div>
            </form>*/}
            {/*<div className="row">
                <div className="col-sm-4 offset-sm-4 col-12">
                    <button onClick={()=>login(auth)}>Войти с помощью Google</button>
                </div>
            </div>*/}
        </>
    )
};