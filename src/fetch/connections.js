import axios from "axios";
import globalVariables from "../globalvar";
const baseUrl = globalVariables.server + "api/connections/";

// fetch all users which is not connected and without logged user
const fetchAllUsers = async (token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = baseUrl;
    const res = await axios.get(url, config);
    return res;
}

const fetchUser = async(token, userId) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    };
    const url = baseUrl + `user/${userId}/profile`;
    const res = await axios.get(url, config);
    return res;
}

// fetch all users which is not connected and without logged user
const fetchRequestConnection = async (token, exploredUserId) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = baseUrl + "sendRequest/";
    const res = await axios.post(url, {exploredUserId}, config);
    return res;
}

const fetchAcceptConnection = async (token, exploredUserId) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = baseUrl + "acceptRequest/";
    const res = await axios.post(url, {exploredUserId}, config);
    return res;
}

const fetchRemoveConnection = async(token, exploredUserId) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = baseUrl + "removeConnection/";
    const res = await axios.post(url, {exploredUserId}, config);
    return res;
}

export {
    fetchUser,
    fetchAllUsers,
    fetchRequestConnection,
    fetchAcceptConnection,
    fetchRemoveConnection
};