import axios from "axios";
import {Cookies} from "react-cookie";

const API_URL = "http://localhost:8000/signin";
const cookies = new Cookies();

const signIn = async (data) => {
    return await axios.post(API_URL, data, {withCredentials: true}); // For httpOnly
}

const getCurrentUser = () => {
    return cookies.get("role");
};

const auth = {
    signIn,
    getCurrentUser
};

export default auth;




