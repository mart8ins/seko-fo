import axios from "axios";
import globalVariables from "../globalVariables";
const baseUrl = globalVariables.server + "api/workout/";

// SAVE TRAINING SESSION/DAY
const postTrainingSession = async (token, workout) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    };

    const url = `${baseUrl}new`;
    const res = axios.post(url, workout, config);
    return res;
}

// GET ALL USERS TRAINING DATA
const getAllUserTrainingSessions = async (token, userId) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    };

    const url = `${baseUrl}${userId}/sessions`;
    const res = axios.get(url, config);
    return res;
}


export {
    postTrainingSession,
    getAllUserTrainingSessions
};