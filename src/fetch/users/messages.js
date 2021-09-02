import axios from "axios";

const baseUrlUsers = "http://localhost:3002/api/";
// /:uid/messages/new

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
    sendMessageToUser,
    getAllConversations,
    setAllMessagesAsRead,
    getMessageFeed
};