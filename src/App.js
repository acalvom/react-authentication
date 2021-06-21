import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import AdminBoard from "./components/AdminBoard";
import AuthService from "./services/Auth.service";
import UserBoard from "./components/UserBoard";
import {useCookies} from "react-cookie";
import LogOut from "./components/LogOut";

function App() {
    const [loggedUser, setLoggedUser] = useState(null);
    const [cookies] = useCookies(["loggedUser"]);

    const checkLogin = () => {
        setLoggedUser(AuthService.getCurrentUser());
    }

    const checkLogout = () => {
        AuthService.logOut();
        setLoggedUser(AuthService.getCurrentUser());
    }

    useEffect(() => {
        setLoggedUser(cookies.loggedUser)
    }, [cookies.loggedUser])

    return (
        <Router>
            <Navbar role={loggedUser && loggedUser.role}/>
            <div className="container my-3">
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/adminboard"><AdminBoard loggedUser={loggedUser}/></Route>
                    <Route path="/userboard"><UserBoard loggedUser={loggedUser}/></Route>
                    <Route path="/signin"><SignIn checkLogin={checkLogin}/></Route>
                    <Route path="/logout"><LogOut checkLogout={checkLogout}/></Route>
                    <Route path="/*"><NotFound/></Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
