import axios from "axios";
import globalVariables from "../../globalVariables";
const baseUrl = globalVariables.server + "api/";

// fetch all users which is not connected and without logged user
const getAllNotConnectedUsers = async (token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = baseUrl;
    const res = await axios.get(url, config);
    return res;
}

const getUser = async (uid, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrl}${uid}`;
    const res = await axios.get(url, config);
    return res;
}

const getUsersConnections = async (uid, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrl}${uid}/connections`;
    const res = await axios.get(url, config);
    return res;
}

const requestConnection = async(exploredUserID, token)=> {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrl}${exploredUserID}/connections/request`;
    const res = axios.post(url, {}, config);
    return res;
}

const acceptConnectionRequest = async(acceptedUser, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrl}${acceptedUser}/connections/accept`;
    const res = axios.post(url, {}, config);
    return res;
}



export {
    getAllNotConnectedUsers,
    getUser,
    getUsersConnections,
    requestConnection,
    acceptConnectionRequest
};