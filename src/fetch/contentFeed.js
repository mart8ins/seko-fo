import axios from "axios";
import globalVariables from "../globalvar";
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

const getContentFeedActivity = async(token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrl}contentFeed/activity`;
    const res = axios.get(url, config);
    return res;
}

export {
    getContentFeed,
    getContentFeedActivity
};