import axios from "axios";
import globalVariables from "../globalVariables";
const baseUrl = globalVariables.server + "api/";

const getContentFeed = async(token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrl}contentFeed`;
    const res = axios.get(url, config);
    return res;
}

export {
    getContentFeed
};