import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Pagination } from "@material-ui/lab";
import { makeStyles, CircularProgress } from "@material-ui/core";
import { getNews } from "../../utils/ApiService/news.api";
import { getNewsAction } from "../../store/actions/index";
import NEWS_IMAGE from "../../assets/home_img.JPG";
import backgroundImage from "../../assets/home_image_two.jpg";
import ImageWithTextCenter from "../../components/Shared/ImageWithTextCenter";
import newsImageOne from "../../assets/news_image_one.png";
import newsImageFive from "../../assets/home_new_img.png";
import newsImageFour from "../../assets/home_image_two.jpg";
import newsImageSeven from "../../assets/AIPM_LOGO.png";
import newsImageTwo from "../../assets/news_image_two.JPG";
import newsImageThree from "../../assets/news_image_three.JPG";
import TextImage from "../../components/Shared/TextImage";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";

const useStyles = makeStyles((theme) => ({
  pagination: {
    marginTop: 30,
    justifyContent: "center",
    paddingLeft: "30%",
  },
  textImageContainer: {
    marginTop: 30,
    paddingLeft: "10%",
    paddingRight: "10%"
  },
  circularProgress: {
    textAlign: "center",
  },
  circularColor: {
    color: DEEP_BLUE_COLOR,
  },
}));
const News = () => {

  const newsState = useSelector((state) => state.news);
  const classes = useStyles();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(newsState ? newsState.slice(0, 3) : []);
  const dispatch = useDispatch();

  const handlePaginationChange = (event, value) => {
    setData(newsState.slice((value - 1) * 3, value * 3));
  };
  const count =
  newsState.length / 3 - parseInt(newsState.length / 3) !== 0
      ? parseInt(newsState.length / 3) + 1
      : parseInt(newsState.length / 3);
  const styles = {
    width: 80,
    height: 60,
    backgroundImage: backgroundImage,
    title: "AIPM News",
    detail: {
      description: "",
      titleFont: "h6",
      descriptionFont: "body2",
    },
    borderRadius: 15,
  };
  const titleStyle = {
    textAlign: "start",
    marginBottom: 10,
  };

  const items = [
    {
      title: "January 20, Ambaricho Mountain Program",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 
          university students and a few high school students that are very interested in serving the Lord as missionaries. In total 250 
          attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
          The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, AIPM held its annual 
          Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are 
          very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta 
          and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin.`,
      imageUrl: `${newsImageOne}`,
    },
    {
      title: "November 10, 40 days fasting and prayer",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 
      university students and a few high school students that are very interested in serving the Lord as missionaries. In total 250 
      attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
      The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, AIPM held its annual 
      Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are 
      very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta 
      and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin.`,
      imageUrl: `${newsImageThree}`,
    },
    {
      title: "January 20, Ambaricho Mountain Program",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 
          university students and a few high school students that are very interested in serving the Lord as missionaries. In total 250 
          attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
          The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, AIPM held its annual 
          Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are 
          very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta 
          and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin.`,
      imageUrl: `${newsImageSeven}`,
    },
    {
      title: "September 15, Missionaries Training",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 
          university students and a few high school students that are very interested in serving the Lord as missionaries. In total 250 
          attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
          The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, AIPM held its annual 
          Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are 
          very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta 
          and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin.`,
      imageUrl: `${newsImageTwo}`,
    },
    {
      title: "September 15, Missionaries Training",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 
            university students and a few high school students that are very interested in serving the Lord as missionaries. In total 250 
            attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
            The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, AIPM held its annual 
            Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are 
            very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta 
            and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin.`,
      imageUrl: `${newsImageFour}`,
    },
    {
      title: "November 10, 40 days fasting and prayer",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 
      university students and a few high school students that are very interested in serving the Lord as missionaries. In total 250 
      attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
      The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, AIPM held its annual 
      Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are 
      very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta 
      and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin.`,
      imageUrl: `${newsImageThree}`,
    },
    {
      title: "January 20, Ambaricho Mountain Program",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 
          university students and a few high school students that are very interested in serving the Lord as missionaries. In total 250 
          attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
          The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, AIPM held its annual 
          Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are 
          very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta 
          and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin.`,
      imageUrl: `${newsImageFive}`,
    },
  ];
  const fetchNews = async () => {
    // setIsLoading(true);
    // const res = await getNews();
    // setIsLoading(false);
    // dispatch({
    //     type: "GET_NEWS",
    //     payload: res
    // })
    // dispatch(getNewsAction(res.data.data));
    // setData(res.data.data.slice(0, 3))
    dispatch(getNewsAction(items));
    setData(items.slice(0, 3))
  };
  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <>
      <ImageWithTextCenter styles={styles} />
      {isLoading ? (
        <div className={classes.circularProgress}>
          <CircularProgress />
        </div>
      ) : (
        <div className={classes.textImageContainer}>
          {data.map((item, index) => {
            return <TextImage key={index} data={item} styles={titleStyle} />;
          })}
          {items.length > 3 && (
            <Pagination
              className={classes.pagination}
              onChange={handlePaginationChange}
              count={count}
              variant="outlined"
              shape="rounded"
            />
          )}
        </div>
      )}
    </>
  );
};

export default News;
