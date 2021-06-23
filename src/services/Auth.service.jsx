import axios from "axios";

const API_URL = "http://localhost:8000";

axios.defaults.withCredentials = true; // For httpOnly

const signIn = async (data) => {
    return await axios.post(API_URL + '/signin', data);
}

const checkSignIn = async () => {
    return await axios.get(API_URL + '/signin');
}

const logOut = async () => {
    return await axios.get(API_URL + "/logout");
};

const auth = {
    signIn,
    checkSignIn,
    logOut
};

export default auth;




