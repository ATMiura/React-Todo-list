import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {Loader} from "./Loader";

export const Notes = ({user, notes, onRemove, onEdit, onSuccess}) => {

    return (
        <TransitionGroup component="ul" className="list-group">
            {notes.map(note => (
                user.uid === note.uid ? <CSSTransition
                    key={note.id}
                    timeout={800}
                    classNames={'note'}
                >

                    <li className="note list-group-item">
                        <div className="">
                            <strong>{note.title}</strong>
                            <small>{note.date}</small>
                        </div>
                        <div className="btn-group">
                            <button
                                type="button"
                                className="btn btn-outline-success btn-sm"
                                onClick=''
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
                    </li>
                </CSSTransition> : null

            ))}
        </TransitionGroup>
    )
};