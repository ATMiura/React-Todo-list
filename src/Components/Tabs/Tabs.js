import React, {useState} from 'react';
import TabItem from "./TabItem";
import TabNavItem from "./TabNavItem";

const Tabs = ({user, notes, onRemove, onStatus}) => {

    const [active, setActive] = useState(notes[0].id);
    const uniqKeyForNav = 'status';
    const uniqNav = [...new Map(notes.map(item =>
        [item[uniqKeyForNav], item])).values()];

    return (
        <>
            <nav>
                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                    {uniqNav.map(({id, status, isActive, active}, index) =>
                        <a
                            className={isActive ? 'nav-item nav-link active' : 'nav-item nav-link'}
                            id={'nav-'+index}
                            onClick={() => setActive(index)}
                            data-toggle="tab"
                            href={'#nav-'+index}
                            role="tab"
                            aria-controls={'nav-'+index}
                            aria-selected={status}
                        >
                            {status ? 'Выполненные' : 'Список заметок'}
                        </a>
                    )}
                </div>
            </nav>
            <div className="tab-content" id="nav-tabContent">
                {notes.map((note, index) => {
                    return (
                        <>
                            {note.status && note.status
                                ? <TabItem key={index} user={user} notes={notes} />
                                : <TabItem key={index} user={user} notes={notes} />
                            }
                        </>
                    )
                })}
            </div>
        </>
    );
};

export default Tabs;