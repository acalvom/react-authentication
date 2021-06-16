/**/import React from 'react';
import {Link} from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>Sorry!</h1>
            <p>The page you are looking for is not available</p>
            <Link to="/">Send me to Home</Link>
        </div>
    );
};

export default NotFound;