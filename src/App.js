import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import AdminBoard from "./components/AdminBoard";
import AuthService from "./services/Auth.service";
import UserBoard from "./components/UserBoard";
import LogOut from "./components/LogOut";

function App() {
    const [loggedUser, setLoggedUser] = useState(null);
    const [role, setRole] = useState("");

    const checkLogin = () => {
        AuthService.checkSignIn().then((response) => {
            if (response.data.loggedIn === true) {
                setRole(response.data.user.role);
                setLoggedUser(response.data.user);
            } else {
                setRole("");
                setLoggedUser(null);
            }
        });
    }

    useEffect(() => {
        checkLogin();
    }, []);

    return (
        <Router>
            <Navbar role={role}/>
            <div className="container my-3">
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/adminboard"><AdminBoard loggedUser={loggedUser}/></Route>
                    <Route path="/userboard"><UserBoard loggedUser={loggedUser}/></Route>
                    {/*<Route path="/signin"><SignIn checkLogin={checkLogin}/></Route>*/}
                    <Route path="/signin"><SignIn/></Route>
                    <Route path="/logout"><LogOut/></Route>
                    <Route path="/*"><NotFound/></Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
