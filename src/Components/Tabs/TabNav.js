import React from 'react';

const TabNav = ({id, status}) => {

    return (
        <nav>
            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Home</a>
            </div>
        </nav>
    )
};

export default TabNav;