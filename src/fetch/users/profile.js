import axios from "axios";
import globalVariables from "../../globalVariables";
const baseUrl = globalVariables.server + "api/";

const changeProfileData = async (token, profileData) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrl}profile/change/userdata`;
    const res = await axios.post(url, {data: profileData}, config);
    return res;
}

const changeProfilePassword = async (token, passwords) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrl}profile/change/password`;
    const res = await axios.post(url, {data: passwords}, config);
    return res;
}

const changeProfilePhoto = async (token, file) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token,
             'Content-Type': 'multipart/form-data'
        }
    }
    const url = `${baseUrl}profile/change/photo`;
    const res = await axios.post(url, file, config);
    return res;
}



export {
    changeProfileData,
    changeProfilePassword,
    changeProfilePhoto
};