import React from 'react';

const AdminBoard = (props) => {
    const loggedUser = props.loggedUser;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">Welcome {loggedUser.email}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Admin Board</h6>
                <p className="card-text">Your role is {loggedUser.role}.</p>
                <p className="card-text">Your token is {loggedUser.access_token}</p>
            </div>
        </div>
    );
};

export default AdminBoard;