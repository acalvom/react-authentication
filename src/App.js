import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import NotFound from "./components/NotFound";
import SignIn from "./components/SignIn";
import {useCookies} from "react-cookie";
import {useEffect, useState} from "react";
import AuthService from "./services/Auth.service";

function App() {
    const [cookies] = useCookies(["role"]);
    const [userRole, setUserRole] = useState(null);

    useEffect(() => {
        let role = AuthService.getCurrentUser();
        setUserRole(role)
        console.log(userRole)
    }, [cookies, userRole])

    return (
        <Router>
            <Navbar/>
            <div className="container my-3">
                <Switch>
                    <Route exact path="/"><Home/></Route>
                    <Route path="/signin"><SignIn/></Route>
                    <Route path="/*"><NotFound/></Route>
                </Switch>
            </div>
        </Router>

    );
}

export default App;
