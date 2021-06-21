import React from 'react';

const LogOut = (props) => {

    const handleRemoveCookie = () => {
        props.checkLogout();
    }

    return (
        <div>
            <button onClick={handleRemoveCookie}>Remove Cookie</button>
        </div>
    );
};


export default LogOut;