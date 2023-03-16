import axios from "axios";
import { baseUrl } from "../constants/baseURL";

axios.defaults.baseURL = process.env.AIPM_API_SERVICE;

export const getTestimonies = async () => {
    return await axios.get(`${baseUrl}/testimonies`).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}

export const getTestimony = async (id) => {
    return await axios.get(`${baseUrl}/testimonies/${id}`).then(res => {
        return res
    }).catch(err => {
        return err;
    })
}

export const addTestimony = async (staffInfo) => {
    return await axios
      .post(`${baseUrl}/testimonies`, {
        //   fullName: staffInfo.fullName,
        //   email: staffInfo.email,
        //   role: staffInfo.role,
        //   gender: staffInfo.gender,
        //   staffLocation: staffInfo.staffLocation,
        //   aipmService: staffInfo.aipmService,
        userId: "1",
        id: "2",
        title: "user added",
        body: "body part",
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  };
  
  export const updatTestimony = async (staffInfo) => {
    return await axios
      .put(`${baseUrl}/testimonies/${staffInfo.id}`, {
        //   fullName: staffInfo.fullName,
        //   email: staffInfo.email,
        //   role: staffInfo.role,
        //   gender: staffInfo.gender,
        //   staffLocation: staffInfo.staffLocation,
        //   aipmService: staffInfo.aipmService,
        userId: "1",
        id: staffInfo.id,
        title: "user added",
        body: "body part",
      })
      .then((res) => {
        return res;
      })
      .catch((err) => {
        return err;
      });
  }