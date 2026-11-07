import axios from "axios";
import { baseUrl } from "../constants/baseURL";

axios.defaults.baseURL = baseUrl;

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
