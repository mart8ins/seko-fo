import axios from "axios";
import globalVariables from "../globalvar";
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
const getAllTrainingDays = async (token) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    };

    const url = `${baseUrl}all`;
    const res = axios.get(url, config);
    return res;
}

// GET ALL USER SESSIONS DATA
const getAllUserTrainingDays = async (token, userId) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    };
    const url = `${baseUrl}${userId}`;
    const res = axios.get(url, config);
    return res;
}

// GET SPECIFIC TRAINING DAY
const getTrainingDay = async (token, trainingDayId) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    };
    const url = `${baseUrl}trainingday/${trainingDayId}`;
    const res = axios.get(url, config);
    return res;
}

const deleteTrainingDay = async (token, trainingDayId) => {
    const config = {
        headers: {
            Authorization: "Bearer " + token
        }
    };
    const url = `${baseUrl}trainingday/delete`;
    const res = axios.post(url,{trainingDayId}, config);
    return res;
}


export {
    postTrainingSession,
    getAllTrainingDays,
    getAllUserTrainingDays,
    getTrainingDay,
    deleteTrainingDay
};