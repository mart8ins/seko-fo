import axios from "axios";

const baseUrlUsers = "http://localhost:3002/api/";

const changeProfileData = async (token, profileData) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrlUsers}profile/change/userdata`;
    const res = await axios.post(url, {data: profileData}, config);
    return res;
}

const changeProfilePassword = async (token, passwords) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrlUsers}profile/change/password`;
    const res = await axios.post(url, {data: passwords}, config);
    return res;
}



export {
    changeProfileData,
    changeProfilePassword
};