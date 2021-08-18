import axios from "axios";

const baseUrlUsers = "http://localhost:3002/api/users/";
// /:uid/messages/new

// fetch all users which is not connected and without logged user
const getAllNotConnectedUsers = async (token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token //the token is a variable which holds the token
          }
    }
    const url = baseUrlUsers;
    const res = await axios.get(url, config);
    return res;
}

const getUser = async (uid, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrlUsers}${uid}`;
    const res = await axios.get(url, config);
    return res;
}

const getUsersConnections = async (uid, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrlUsers}${uid}/connections`;
    const res = await axios.get(url, config);
    return res;
}

const requestConnection = async(exploredUserID, token)=> {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrlUsers}${exploredUserID}/connections/request`;
    const res = axios.post(url, {}, config);
    return res;
}

const acceptConnectionRequest = async(acceptedUser, token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrlUsers}${acceptedUser}/connections/accept`;
    const res = axios.post(url, {}, config);
    return res;
}

const sendMessageToUser = async(token, messageBody) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrlUsers}messages/new`;
    const res = axios.post(url, {data: messageBody}, config);
    return res;
}

const getAllConversations = async(token) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrlUsers}messages`;
    const res = await axios.get(url, config);
    return res;
}

const getMessageFeed = async(token, userId) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrlUsers}messages/feed?userId=${userId}`;
    const res = await axios.get(url, config);
    return res;
}

const setAllMessagesAsRead = async(token, userId)=> {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrlUsers}messages`;
    const res = await axios.post(url, {exploredUserId: userId}, config);
    return res;
}

export {
    getAllNotConnectedUsers,
    getUser,
    getUsersConnections,
    requestConnection,
    acceptConnectionRequest,
    sendMessageToUser,
    getAllConversations,
    setAllMessagesAsRead,
    getMessageFeed
};