import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Tabs from "./Tabs/Tabs";

export const Notes = ({user, notes, onRemove, onEdit, onStatus}) => {

    const checkLength = [...new Set(notes.map(note => note.status))];

    return (
        <>
            {/*{
                checkLength.length > 1
                    ? <Tabs key={true} user={user} notes={notes} onRemove={onRemove} onStatus={onStatus} />
                    : null
            }*/}
            <TransitionGroup component="ul" className="list-group">
                {notes.map(note => (
                    user.uid === note.uid
                        ? <CSSTransition
                            key={note.id}
                            timeout={800}
                            classNames={'note'}
                        >
                            <>
                                {<li className="note list-group-item">
                                    {note.status ? `${note.status}` : `${note.status}`}
                                    <div className="">
                                        <strong>{note.title}</strong>
                                        <small>{note.date}</small>
                                    </div>
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-outline-success btn-sm"
                                            onClick={() => onStatus(note.id, note)}
                                        >
                                            &#128504;
                                        </button>
                                        <button
                                            type="button"
                                            className="btn btn-outline-danger btn-sm"
                                            onClick={() => onRemove(note.id)}
                                        >
                                            &times;
                                        </button>
                                    </div>
                                </li>}
                            </>
                        </CSSTransition>
                        : null

                ))}
            </TransitionGroup>
        </>
    )
};