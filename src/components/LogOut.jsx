import {useEffect} from 'react';
import {useHistory} from "react-router-dom";
import AuthService from "../services/Auth.service";

const LogOut = () => {

    const history = useHistory();

    useEffect(() => {

        try {
            AuthService.logOut().then();
            history.push('/');
            history.go(0);  // To refresh the page
        } catch (err) {
            console.log(err.response.data.message);
        }
    })

    return null;
};

export default LogOut;