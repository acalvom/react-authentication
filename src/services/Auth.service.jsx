import axios from "axios";
import {Cookies} from "react-cookie";

const API_URL = "http://localhost:8000/signin";
const cookies = new Cookies();

axios.defaults.withCredentials = true; // For httpOnly

const signIn = async (data) => {
    return await axios.post(API_URL, data);
}

const checkSignIn = async () => {
    return await axios.get(API_URL);
}

const logOut = () => {
    cookies.remove("loggedUser", {sameSite: 'strict'});
    cookies.remove("token", {sameSite: 'strict'});
};

const getCurrentUser = () => {
    return cookies.get("loggedUser");
};

const auth = {
    signIn,
    checkSignIn,
    logOut,
    getCurrentUser
};

export default auth;




