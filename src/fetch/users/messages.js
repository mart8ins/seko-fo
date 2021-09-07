import axios from "axios";

const baseUrlUsers = "http://localhost:3002/api/";

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

export {
    sendMessageToUser
};