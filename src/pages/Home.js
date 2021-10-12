import React, {useContext, useEffect} from 'react';
import {Form} from "../Components/Form";
import {Notes} from "../Components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../Components/Loader";

export const Home = () => {

    const {loading, user, notes, fetchNotes, statusNote, editNote, removeNote} = useContext(FirebaseContext);

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, []);

    if(!user){
        return <Loader/>
    }

    return (
        <>
            <Form />
            <hr />

            { loading
                ? <Loader/>
                : <Notes user={user} notes={notes} onStatus={statusNote} onEdit={editNote} onRemove={removeNote} />
            }
        </>
    )
};