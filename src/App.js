import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useEffect, useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import AdminBoard from "./components/AdminBoard";
import AuthService from "./services/Auth.service";
import UserBoard from "./components/UserBoard";

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);

    const checkLogin = (isLogged) => {
        setIsLogged(isLogged);
    }

    useEffect(() => {
        setLoggedUser(AuthService.getCurrentUser());
    }, [loggedUser])

    return (
        <Router>
            <Navbar role={loggedUser && loggedUser.role} isLogged={isLogged}/>
            <div className="container my-3">
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/adminboard"><AdminBoard loggedUser={loggedUser}/></Route>
                    <Route path="/userboard"><UserBoard loggedUser={loggedUser}/></Route>
                    <Route path="/signin"><SignIn checkLogin={checkLogin}/></Route>
                    <Route path="/*"><NotFound/></Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
