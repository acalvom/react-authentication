import axios from "axios";
import {Cookies} from "react-cookie";

const API_URL = "http://localhost:8000/signin";
const cookies = new Cookies();

const signIn = async (data) => {
    return await axios.post(API_URL, data, {withCredentials: true}); // For httpOnly
}

const logOut = () => {
    cookies.remove("loggedUser", {sameSite: 'strict'});
};

const getCurrentUser = () => {
    return cookies.get("loggedUser");
};

const auth = {
    signIn,
    logOut,
    getCurrentUser
};

export default auth;




