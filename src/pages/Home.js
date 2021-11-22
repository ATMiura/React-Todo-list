import React, {useContext, useEffect, useState} from 'react';
import {Form} from "../Components/Form";
import {Notes} from "../Components/Notes";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../Components/Loader";
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import {NavLink} from "react-router-dom";

export const Home = () => {

    const {loading, user, notes, fetchNotes, statusNote, editNote, removeNote} = useContext(FirebaseContext);

    const [value, onChange] = useState(new Date());

    const onClickDayHandler = (value, event) => {
        console.log('Clicked day: ', value)
    }

    useEffect(() => {
        fetchNotes()
        // eslint-disable-next-line
    }, []);

    if(!user){
        return <Loader/>
    }

    return (
        <>
            <div className="row">
                <div className="col-md-4 col-12">
                    <Calendar
                        onChange={onChange}
                        value={value}
                        onClickDay={onClickDayHandler}
                    />
                    <NavLink className="btn btn-primary mt-3" to="/addevents">Добавить мероприятие</NavLink>
                </div>
                <div className="col-md-8 col-12">
                    { loading
                        ? <Loader/>
                        : <Notes user={user} notes={notes} onStatus={statusNote} onEdit={editNote} onRemove={removeNote} />
                    }
                </div>
            </div>
        </>
    )
};