import React from 'react';
import {Link} from "react-router-dom";

const Navbar = (props) => {
    const role = props.role;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                        data-bs-target="#collapseNavbar" aria-controls="collapseNavbar"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>
                <div className="collapse navbar-collapse" id="collapseNavbar">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active">Home</Link>
                        </li>
                        {role === 'admin' && (
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">Admin Board</Link>
                            </li>)
                        }
                        {role === 'user' && (
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">User Board</Link>
                            </li>)
                        }
                    </ul>
                    <ul className="navbar-nav ms-auto">
                        {!role && (<li className="nav-item active">
                            <Link to="/signin" className="nav-link">Sign In</Link>
                        </li>)
                        }
                        {role && (<li className="nav-item active">
                            <Link to="/" className="nav-link">Log Out</Link>
                        </li>)
                        }


                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;