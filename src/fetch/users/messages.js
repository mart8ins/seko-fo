import axios from "axios";
import globalVariables from "../../globalVariables";
const baseUrl = globalVariables.server + "api/";

const sendMessageToUser = async(token, messageBody) => {
    const config = {
        headers: {
            Authorization: 'Bearer ' + token 
          }
    }
    const url = `${baseUrl}messages/new`;
    const res = axios.post(url, {data: messageBody}, config);
    return res;
}

export {
    sendMessageToUser
};