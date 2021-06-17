import axios from "axios";

const API_URL = "http://localhost:8000/signin";

const login = async (data) => {
    return await axios.post(API_URL, data);
}

const auth = {
    login
};

export default auth;




