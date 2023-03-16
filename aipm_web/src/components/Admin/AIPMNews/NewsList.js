import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getNewsAction } from "../../../store/actions";
import { getNews } from "../../../utils/ApiService/news.api";
import NewsListItem from "./NewsListItem";

const useStyles = makeStyles((theme) => ({
  circularProgress: {
    textAlign: "center",
  },
  pagination: {
    marginTop: 30,
    justifyContent: "center",
    paddingLeft: "30%",
  },
}));
const NewsList = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const newsState = useSelector((state) => state.news);
  const [data, setData] = useState(
    newsState ? newsState.slice(0, 3) : []
  );

  const dispatch = useDispatch();

  const handlePaginationChange = (event, value) => {
    setData(newsState.slice((value - 1) * 3, value * 3));
  };
  const count =
    newsState.length / 3 - parseInt(newsState.length / 3) !== 0
      ? parseInt(newsState.length / 3) + 1
      : parseInt(newsState.length / 3);

  const items = [
    {
      id: 1,
      title: "Training for AIPM Missionaries",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions 
      Conference in Durame. This year we also hosted 100 university students and
      a few high school students that are very interested in serving the Lord as 
      missionaries. In total 250 attended the conference. The conference was led by 
      Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
      following is the report from both Dr. Desta and Justin. During the 2nd week of 
      October 2021, AIPM held its annual Missions Conference in Durame. This year 
      we also hosted 100 university students and a few high school students that `,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 2,
      title: "Prayer at Mount Ambaricho",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions 
      Conference in Durame. This year we also hosted 100 university students and
      a few high school students that are very interested in serving the Lord as 
      missionaries. In total 250 attended the conference. The conference was led by 
      Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
      following is the report from both Dr. Desta and Justin. During the 2nd week of 
      October 2021, AIPM held its annual Missions Conference in Durame. This year 
      we also hosted 100 university students and a few high school students that `,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 3,
      title: "Training for AIPM Missionaries",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions 
      Conference in Durame. This year we also hosted 100 university students and
      a few high school students that are very interested in serving the Lord as 
      missionaries. In total 250 attended the conference. The conference was led by 
      Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
      following is the report from both Dr. Desta and Justin. During the 2nd week of 
      October 2021, AIPM held its annual Missions Conference in Durame. This year 
      we also hosted 100 university students and a few high school students that `,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 4,
      title: "Get together with AIPM USA board Members",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions 
      Conference in Durame. This year we also hosted 100 university students and
      a few high school students that are very interested in serving the Lord as 
      missionaries. In total 250 attended the conference. The conference was led by 
      Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
      following is the report from both Dr. Desta and Justin. During the 2nd week of 
      October 2021, AIPM held its annual Missions Conference in Durame. This year 
      we also hosted 100 university students and a few high school students that `,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 5,
      title: "Preaching the Gosple at remote area",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions 
      Conference in Durame. This year we also hosted 100 university students and
      a few high school students that are very interested in serving the Lord as 
      missionaries. In total 250 attended the conference. The conference was led by 
      Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
      following is the report from both Dr. Desta and Justin. During the 2nd week of 
      October 2021, AIPM held its annual Missions Conference in Durame. This year 
      we also hosted 100 university students and a few high school students that `,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 6,
      title: "Wolayita Sodo University Medical Students Movement",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions 
      Conference in Durame. This year we also hosted 100 university students and
      a few high school students that are very interested in serving the Lord as 
      missionaries. In total 250 attended the conference. The conference was led by 
      Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
      following is the report from both Dr. Desta and Justin. During the 2nd week of 
      October 2021, AIPM held its annual Missions Conference in Durame. This year 
      we also hosted 100 university students and a few high school students that `,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
    {
      id: 7,
      title: "Hawassa University Students Movement",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions 
      Conference in Durame. This year we also hosted 100 university students and
      a few high school students that are very interested in serving the Lord as 
      missionaries. In total 250 attended the conference. The conference was led by 
      Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The 
      following is the report from both Dr. Desta and Justin. During the 2nd week of 
      October 2021, AIPM held its annual Missions Conference in Durame. This year 
      we also hosted 100 university students and a few high school students that `,
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
    },
  ];

  const fetchNews = async () => {
    setLoading(true);
    const res = await getNews();
    setLoading(false);
    dispatch(getNewsAction(items));
    setData(items.slice(0, 3));
  };

  useEffect(() => {
    fetchNews();
  }, []);

  return (
    <div>
      {loading ? (
        <div className={classes.circularProgress}>
          <CircularProgress size={24} />
        </div>
      ) : (
        <div>
          {data.map((item, index) => {
            return <NewsListItem data={item} key={item.id} />;
          })}
          {newsState.length > 3 && (
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
    </div>
  );
};

export default NewsList;
