import axios from "axios";
import { baseUrl } from "../constants/baseURL";

export const getUniversityStudentsMovements = async () => {
  return await axios
    .get(`${baseUrl}/photos`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const getUniversityStudentsMovement = async (id) => {
  return await axios
    .get(`${baseUrl}/photos/${id}`)
    .then((res) => {
      return res;
    })
    .catch((err) => {
      return err;
    });
};

export const addStudentsMovement = async (studentsInfo) => {
  return await axios
    .post(`${baseUrl}/photos`, {
      //   title: studentsInfo.title,
      //   detail: studentsInfo.detail,
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

export const updatStudentsMovement = async (studentsInfo) => {
  return await axios
    .put(`${baseUrl}/photos/${studentsInfo.id}`, {
      //   title: studentsInfo.title,
      //   detail: studentsInfo.detail,
      userId: "1",
      id: studentsInfo.id,
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