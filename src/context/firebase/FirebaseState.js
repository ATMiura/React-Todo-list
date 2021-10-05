import React, {useContext, useReducer} from 'react';
import axios from 'axios';
import {FirebaseContext} from "./firebaseContext";
import {firebaseReducer} from "./firebaseReducer";
import {ADD_NOTE, EDIT_NOTE, FETCH_NOTES, REMOVE_NOTE, SHOW_LOADER} from "../types";
import {Context} from "../../index";
import {useAuthState} from "react-firebase-hooks/auth";

const url = process.env.REACT_APP_DB_URL;

export const FirebaseState = ({children}) => {
    const initialState = {
        notes: [],
        loading: false,
    };
    const [state, dispatch] = useReducer(firebaseReducer, initialState);
    const {auth} = useContext(Context);
    const [user] = useAuthState(auth);

    const showLoader = () => dispatch({type: SHOW_LOADER});

    const fetchNotes = async () => {
        showLoader();
        const res = await axios.get(`${url}/notes.json`);
        const payload = Object.keys(res.data || {}).map(key=>{
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
            displayName: user.displayName,
            photoURL: user.photoURL,
            title,
            date: new Date().toJSON()
        };
        try{
            const res = await axios.post(`${url}/notes.json`, note);
            const payload ={
                ...note,
                id: res.data.name
            };

            dispatch({
                type: ADD_NOTE,
                payload
            })
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

    const successNoteList = async id => {
        await axios.delete(`${url}/notes/${id}.json`);
        dispatch({
            type: REMOVE_NOTE,
            payload: id
        })
    };

    const editNote = async title => {
        const note = {
            uid: user.uid,
            displayName: user.displayName,
            photoURL: user.photoURL,
            title,
            date: new Date().toJSON()
        };
        try{
            const res = await axios.post(`${url}/notes.json`, note);
            const payload ={
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
        <FirebaseContext.Provider value={{showLoader, addNote, fetchNotes, successNoteList, removeNote, editNote, user, loading: state.loading, notes: state.notes }}>
            {children}
        </FirebaseContext.Provider>
    )
};