import axios from "axios";

// fetch all users which is not connected and without logged user
const getAllNotConnectedUsers = async (token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = "http://localhost:3002/api/users/";
    const res = await axios.get(url, config);
    return res;
}

const getUser = async (uid, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = `http://localhost:3002/api/users/${uid}`;
    const res = await axios.get(url, config);
    return res;
}

const getUsersConnections = async (uid, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = `http://localhost:3002/api/users/${uid}/connections`;
    const res = await axios.get(url, config);
    return res;
}

const requestConnection = async(exploredUserID, token)=> {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = `http://localhost:3002/api/users/${exploredUserID}/connections/request`;
    const res = axios.post(url, {}, config);
    return res;
}

const acceptConnectionRequest = async(acceptedUser, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = `http://localhost:3002/api/users/${acceptedUser}/connections/accept`;
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