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

// GET ALL SESSIONS DATA
const getAllTrainingSessions = async (token) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    };

    const url = `${baseUrl}sessions`;
    const res = axios.get(url, config);
    return res;
}

// GET ALL USER SESSIONS DATA
const getAllUserTrainingSessions = async (token, userId) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    };

    const url = `${baseUrl}sessions/${userId}`;
    const res = axios.get(url, config);
    return res;
}


export {
    postTrainingSession,
    getAllTrainingSessions,
    getAllUserTrainingSessions
};