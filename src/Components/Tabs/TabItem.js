import React from 'react';
import {CSSTransition, TransitionGroup} from "react-transition-group";

const TabItem = ({id, user, notes, onRemove, onEdit, onStatus}) => {
    return (
        <>
            <div className="tab-pane fade show active" id={'nav-'+id} role="tabpanel" aria-labelledby={'nav-'+id+'tab'}>
                <TransitionGroup component="ul" className="list-group">
                    {notes.map(note => (
                        user.uid === note.uid ? <CSSTransition
                            key={note.id}
                            timeout={800}
                            classNames={'note'}
                        >
                            <>
                                {<li className="note list-group-item">
                                    {note.status && note.status ? 'Выполнена':''}
                                    <div className="">
                                        <strong>{note.title}</strong>
                                        <small>{note.date}</small>
                                    </div>
                                    <div className="btn-group">
                                        <button
                                            type="button"
                                            className="btn btn-outline-success btn-sm"
                                            onClick={()=>onStatus(note.id, note)}
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
                        </CSSTransition> : null

                    ))}
                </TransitionGroup>
            </div>
        </>
    )
};

export default TabItem;