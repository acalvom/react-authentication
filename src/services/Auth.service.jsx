import axios from "axios";

const API_URL = "http://localhost:8000/signin";

const login = async (data) => {
    try {
        await axios.post(API_URL, data);
    } catch (err) {
        console.error(err);
        throw new Error(`HTTP error status: ${err}`)
    }
}

export default {login};




