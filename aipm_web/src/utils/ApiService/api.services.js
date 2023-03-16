import axios from "axios";

axios.defaults.baseURL = process.env.AIPM_API_SERVICE;

export const post = async (route, body) => {
    return await axios.post(route, {body}).then(res => {
        return res;
    }).catch(e => {
        return e;
    })
    // post = async (route, body) => {
    //     // axios.get("/")

    // }
}

const postTestimony = async () => {
    return await axios.post("/testimones", {body}).then
}
