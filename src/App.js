import React, {useContext} from "react";
import {BrowserRouter} from 'react-router-dom';
import {Navbar} from "./Components/Navbar";
import {Alert} from "./Components/Alert";
import {AlertState} from "./context/alert/AlertState";
import {FirebaseState} from "./context/firebase/FirebaseState";
import AppRouter from "./Components/AppRouter";
import {Context} from "./index";
import {useAuthState} from "react-firebase-hooks/auth";
import {Loader} from "./Components/Loader";

function App() {
    const {auth} = useContext(Context);
    const [user, loading, error] = useAuthState(auth);

    if (loading) {
        return <Loader/>
    }

    return (
        <FirebaseState>
            <AlertState>
                <BrowserRouter>
                    <Navbar/>
                    <div className="container pt-4">
                        <Alert />
                        <AppRouter/>
                    </div>
                </BrowserRouter>
            </AlertState>
        </FirebaseState>
    );
}

export default App;
