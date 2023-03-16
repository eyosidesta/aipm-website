import axios from "axios";
import { baseUrl } from "../constants/baseURL";
axios.defaults.baseURL = process.env.AIPM_API_SERVICE;

export const getNews = async () => {
    return await axios.get(`${baseUrl}/news`).then(res => {
        return res;
    }).catch(err => {
        return err
    })
}

export const getNew = async (id) => {
    return await axios.get(`${baseUrl}/news/${id}`).then(res => {
        return res;
    }).catch(err => {
        return err;
    })
}

export const addNews = async (newsInfo) => {
    return await axios
      .post(`${baseUrl}/news`, {
        //   title: newsInfo.title,
        //   detail: newsInfo.detail,
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

  export const updatNews = async (newsInfo) => {
    return await axios
      .put(`${baseUrl}/news/${newsInfo.id}`, {
        //   title: newsInfo.title,
        //   detail: newsInfo.detail,
        userId: "1",
        id: newsInfo.id,
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