import axios from "axios";

import globalVariables from "../../globalVariables";
const baseUrl = globalVariables.server + "api/auth/login";

const loginUser = async (userData) => {
    const res = await axios.post(baseUrl, userData);
    return res;
}

export default loginUser;