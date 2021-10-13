import React, {useContext, useReducer, useState} from 'react';
import axios from 'axios';
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import {ADD_NOTE, EDIT_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER, SUCCESS_NOTE} from "../types";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

// const url = 'process.env.REACT_APP_DB_URL';
const url = 'https://react-todo-login-default-rtdb.europe-west1.firebasedatabase.app/';

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);
    //const [status, setStatus] = useState(false)

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`);
        const payload = Object.keys(res.data || {}).map(key => {
            return {
                ...res.data[key],
                id: key
            }
        });

        dispatch({type: FETCH_NOTES, payload})
    };

    const addNote = async title => {
        const note = {
            uid: user.uid,
            title,
            status: false,
            date: new Date().toJSON()
        };
        try {
            const res = await axios.post(`${url}/notes.json`, note);
            //id=res.data.name
            dispatch({
                type: ADD_NOTE,
                payload: {...note, id: res.data.name}
            });
        } catch (e) {
            throw new Error(e.message)
        }
    };

    const removeNote = async id => {
        await axios.delete(`${url}/notes/${id}.json`);
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    };

    const statusNote = async (id, note) => {
        //setStatus(status => !status);
        const res = await axios.put(`${url}/notes/${id}.json`, {...note, status: !note.status});
        if (res.status === 200) {
            dispatch({
                type: SUCCESS_NOTE,
                payload: res.data
            });
        }
    };

    const editNote = async title => {
        const note = {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            title,
            date: new Date().toJSON()
        };
        try {
            const res = await axios.post(`${url}/notes.json`, note);
            const payload = {
                ...note,
                id: res.data.name
            };

            dispatch({
                type: EDIT_NOTE,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }
    };

    return (
        <FirebaseContext.Provider value={{
            showLoader,
            addNote,
            fetchNotes,
            statusNote,
            removeNote,
            editNote,
            user,
            loading: state.loading,
            notes: state.notes
        }}>
            {children}
        </FirebaseContext.Provider>
    )
};