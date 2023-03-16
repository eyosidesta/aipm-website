import axios from "axios";
import { baseUrl } from "../constants/baseURL";

export const getStaffMembers = async () => {
  return await axios
    .get(`${baseUrl}/photos`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getStaffMember = async (id) => {
  return await axios
    .get(`${baseUrl}/photos/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};


export const addStaffmember = async (staffInfo) => {
  return await axios
    .post(`${baseUrl}/photos`, {
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

export const updatStaffMember = async (staffInfo) => {
  return await axios
    .put(`${baseUrl}/photos/${staffInfo.id}`, {
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