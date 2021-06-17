import axios from "axios";

const url = "http://localhost:3002/api/auth/signup";

const signupUser = async (userData) => {
    const res = await axios.post(url, userData);
    return res;
}

export default signupUser;