import axios from "axios";

const getAllUsers = async (token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = "http://localhost:3002/api/user/users";
    const res = await axios.get(url, config);
    return res;
}

const getUser = async (uid, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = `http://localhost:3002/api/user/${uid}`;
    const res = await axios.get(url, config);
    return res;
}

const getUsersConnections = async (uid, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = `http://localhost:3002/api/user/${uid}/connections`;
    const res = await axios.get(url, config);
    return res;
}

const requestConnection = async(exploredUserID, token)=> {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = `http://localhost:3002/api/user/${exploredUserID}/connections/request`;
    const res = axios.post(url, {}, config);
    return res;
}

export {
    getAllUsers,
    getUser,
    getUsersConnections,
    requestConnection
};