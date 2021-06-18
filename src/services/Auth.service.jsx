import axios from "axios";

const API_URL = "http://localhost:8000/signin";

const signIn = async (data) => {
    return await axios.post(API_URL, data, {withCredentials: true}); // For httpOnly
}

const isAdmin = async (role) => {
    return await role === 'admin';
}

const auth = {
    signIn,
    isAdmin
};

export default auth;




