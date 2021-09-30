import axios from "axios";
import globalVariables from "../../globalVariables";
const baseUrl = globalVariables.server + "api/story/";

const postStory = async (token, formData) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrl}new`;
    const res = await axios.post(url, formData, config);
    return res;
}

const rateStory = async (token, storyId, rate) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrl}rate`;
    const res = await axios.post(url, {storyId, rate}, config);
    return res;
}

const getAllStories = async (token) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrl}`;
    const res = await axios.get(url, config);
    return res;
}

const getAllUserStories = async (token, userId) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrl}user/${userId}`;
    const res = await axios.get(url, config);
    return res;
}

const getStory = async (token, storyId) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    const url = `${baseUrl}/${storyId}`;
    const res = await axios.get(url, config);
    return res;
}

export {
    postStory,
    getAllStories,
    getStory,
    getAllUserStories,
    rateStory
};