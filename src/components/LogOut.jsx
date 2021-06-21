import {useEffect} from 'react';
import {useHistory} from "react-router-dom";

const LogOut = (props) => {

    const history = useHistory();

    useEffect(() => {
        props.checkLogout();
        history.push('/');
    })

    return null;
};

export default LogOut;