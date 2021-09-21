import axios from "axios";
import globalVariables from "../../globalVariables";
const baseUrl = globalVariables.server + "api/create/";

const postStory = async (token, formData) => {
    const config = {
        headers: {
             Authorization: 'Bearer ' + token
        }
    }
    console.log(formData)
    const url = `${baseUrl}/new_story`;
    const res = await axios.post(url, formData, config);
    return res;
}


export {
    postStory
};