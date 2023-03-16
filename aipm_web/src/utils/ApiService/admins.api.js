import axios from "axios";
import { baseUrl } from "../constants/baseURL";

export const addAdmin = async (credentials) => {
  return await axios
    .post(`${baseUrl}/photos`, {
      //   fullName: credentials.fullName,
      //   email: credentials.email,
      //   role: credentials.role,
      //   gender: credentials.gender,
      //   staffLocation: credentials.staffLocation,
      //   aipmService: credentials.aipmService,
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

export const getAdminList = async () => {
    return await axios.get(`${baseUrl}/photos`).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}
