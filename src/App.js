import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {useState} from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import AdminBoard from "./components/AdminBoard";

function App() {
    const [isLogged, setIsLogged] = useState(false);
    const [loggedUser, setLoggedUser] = useState(null);


    const checkLogin = (isLogged, loggedUser) => {
        setIsLogged(isLogged);
        setLoggedUser(loggedUser);
    }

    return (
        <Router>
            <Navbar role={loggedUser && loggedUser.role} isLogged={isLogged}/>
            <div className="container my-3">
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/adminboard"><AdminBoard loggedUser={loggedUser}/></Route>
                    <Route path="/signin"><SignIn checkLogin={checkLogin}/></Route>
                    <Route path="/*"><NotFound/></Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
