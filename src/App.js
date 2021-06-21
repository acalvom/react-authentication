import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import {useEffect, useState} from "react";
import AuthService from "./services/Auth.service";

function App() {
    const [userRole, setUserRole] = useState(undefined);
    const [isLogged, setIsLogged] = useState(false);

    const checkLogin = (data) => {
        setIsLogged(data);
    }

    useEffect(() => {
        setUserRole(AuthService.getCurrentUser());
    }, [userRole, isLogged])

    return (
        <Router>
            <Navbar role={userRole} isLogged={isLogged}/>
            <div className="container my-3">
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/signin"><SignIn isLogged={checkLogin}/></Route>
                    <Route path="/*"><NotFound/></Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
