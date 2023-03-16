import React, { useEffect, useState } from "react";
import { Pagination } from "@material-ui/lab";
import { CircularProgress, makeStyles } from "@material-ui/core";
import { useSelector, useDispatch } from "react-redux";
import { getTestimoniesAction } from "../../../store/actions";
import { getTestimonies } from "../../../utils/ApiService/testimony.api";
import TestimonyListItem from "./TestimonyListItem";

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
const TestimonyList = () => {
  const classes = useStyles();
  const [loading, setLoading] = useState(false);
  const testimoniesState = useSelector((state) => state.testimonies);
  const [data, setData] = useState(
    testimoniesState ? testimoniesState.slice(0, 3) : []
  );

  const dispatch = useDispatch();

  const handlePaginationChange = (event, value) => {
    setData(testimoniesState.slice((value - 1) * 3, value * 3));
  };
  const count =
    testimoniesState.length / 3 - parseInt(testimoniesState.length / 3) !== 0
      ? parseInt(testimoniesState.length / 3) + 1
      : parseInt(testimoniesState.length / 3);

  const items = [
    {
      id: 1,
      fullName: "Aba Gole",
      servicePlace: "Missionary in Gambela",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
      action: "Read More",
      descriptionOne: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year 
        we also hosted 100 university students and a few high school students that are very interested in serving 
        the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and
        Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta 
        and Justin. During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. 
        This year we also hosted 100 university students and a few high school students that are very interested
        in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by 
        Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from 
        both Dr. Desta and Justin.`,
      descriptionTwo: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year  we also hosted 100 university students and a few high 
        school students that are very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and 
        Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, 
        AIPM held its annual Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are very interested
        in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from 
        AIPM USA. The following is the report from both Dr. Desta and Justin.`,
    },
    {
      id: 2,
      fullName: "Ababa Wandaro",
      servicePlace: "Missionary In Bale",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
      action: "Read More",
      descriptionOne: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year 
        we also hosted 100 university students and a few high school students that are very interested in serving 
        the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and
        Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta 
        and Justin. During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. 
        This year we also hosted 100 university students and a few high school students that are very interested
        in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by 
        Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from 
        both Dr. Desta and Justin.`,
      descriptionTwo: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year  we also hosted 100 university students and a few high 
        school students that are very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and 
        Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, 
        AIPM held its annual Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are very interested
        in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from 
        AIPM USA. The following is the report from both Dr. Desta and Justin.`,
    },
    {
      id: 3,
      fullName: "Desta Langena",
      servicePlace: "Missionary In Gojam",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
      action: "Read More",
      descriptionOne: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year 
        we also hosted 100 university students and a few high school students that are very interested in serving 
        the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and
        Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta 
        and Justin. During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. 
        This year we also hosted 100 university students and a few high school students that are very interested
        in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by 
        Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from 
        both Dr. Desta and Justin.`,
      descriptionTwo: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year  we also hosted 100 university students and a few high 
        school students that are very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and 
        Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, 
        AIPM held its annual Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are very interested
        in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from 
        AIPM USA. The following is the report from both Dr. Desta and Justin.`,
    },
    {
      id: 4,
      fullName: "Tamiru Langena",
      servicePlace: "Missionary in Afar",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl:
        "https://s3.amazonaws.com/media.cloversites.com/e1/e165fffc-7054-48fb-a10c-09c8496cb4f6/site-images/814755c2-b71f-4e73-94b6-6d33885c3a5e@2x.png",
      action: "Read More",
      descriptionOne: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year 
        we also hosted 100 university students and a few high school students that are very interested in serving 
        the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and
        Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta 
        and Justin. During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. 
        This year we also hosted 100 university students and a few high school students that are very interested
        in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by 
        Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from 
        both Dr. Desta and Justin.`,
      descriptionTwo: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year  we also hosted 100 university students and a few high 
        school students that are very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and 
        Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, 
        AIPM held its annual Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are very interested
        in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from 
        AIPM USA. The following is the report from both Dr. Desta and Justin.`,
    },
  ];

  const fetchTestimonies = async () => {
    setLoading(true);
    const res = await getTestimonies();
    setLoading(false);
    dispatch(getTestimoniesAction(items));
    setData(items.slice(0, 3));
  };

  useEffect(() => {
    fetchTestimonies();
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
            return <TestimonyListItem data={item} key={item.id} />;
          })}
          {testimoniesState.length > 3 && (
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

export default TestimonyList;
