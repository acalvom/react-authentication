function App() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseNavbar" aria-controls="collapseNavbar"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="collapseNavbar">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#">Admin Board</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#">User Board</a>
                            </li>
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#">Sign Up</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#">Sign In</a>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" aria-current="page" href="#">Log Out</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default App;
