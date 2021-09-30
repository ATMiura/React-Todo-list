import React from 'react';

export const Login = () => {
    return (
        <>
            <form>
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
            </form>
        </>
    )
};