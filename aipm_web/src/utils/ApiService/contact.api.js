import axios from "axios";
import { baseUrl } from "../constants/baseURL";

export const sendContactMessage = async (payload) => {
  return await axios
    .post(`${baseUrl}/contact`, {
      name: payload.name,
      phone: payload.phone,
      email: payload.email,
      reason: payload.reason,
      message: payload.message,
    })
    .then((res) => res)
    .catch((err) => err.response || err);
};
