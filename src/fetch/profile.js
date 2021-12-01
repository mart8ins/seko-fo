import axios from "axios";
import globalVariables from "../globalvar";
const baseUrl = globalVariables.server + "api/profile/";

const changeProfileData = async (token, profileData) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrl}/change/userdata`;
    const res = await axios.post(url, {data: profileData}, config);
    return res;
}

const changeProfilePassword = async (token, passwords) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrl}/change/password`;
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
    const url = `${baseUrl}/change/photo`;
    const res = await axios.post(url, file, config);
    return res;
}

const changeAbout = async (token, about) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    }
    const url = `${baseUrl}/change/about`;
    const res = axios.post(url, {data: about}, config);
    return res;
}



export {
    changeProfileData,
    changeProfilePassword,
    changeProfilePhoto,
    changeAbout
};