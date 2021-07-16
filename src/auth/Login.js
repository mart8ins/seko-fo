import axios from "axios";

const url = "http://localhost:3002/api/auth/login";

const loginUser = async (userData) => {
    const res = await axios.post(url, userData);
    return res;
}

export default loginUser;