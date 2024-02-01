import React, { useState, useEffect } from "react";
import { makeStyles, Typography, CircularProgress } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import { getPrayerMovements } from "../../utils/ApiService/prayer.movement.api";
import { useDispatch, useSelector } from "react-redux";
import { getPrayerMovementAction } from "../../store/actions";
import backgroundImage from "../../assets/prayer_image.png";
import ImageWithTextCenter from "../../components/Shared/ImageWithTextCenter";
import newsImageFive from "../../assets/home_new_img.png";
import newsImageFour from "../../assets/home_image_two.jpg";
import newsImageSeven from "../../assets/AIPM_LOGO.png";
import newsImageOne from "../../assets/news_image_one.png";
import newsImageTwo from "../../assets/news_image_two.JPG";
import newsImageThree from "../../assets/news_image_three.JPG";
import TextImage from "../../components/Shared/TextImage";
import { Pagination } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  root: {
    color: DEEP_BLUE_COLOR,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  prayerTextContainer: {
    textAlign: "center",
    marginTop: 30,
  },
  prayerDetail: {
    marginTop: 20,
    
  },
  textImageContainer: {
    marginTop: 30,
  },
  pagination: {
    marginTop: 30,
    justifyContent: "center",
    paddingLeft: "30%",
  },
  circularProgress: {
    textAlign: "center",
  },
  circularColor: {
    color: DEEP_BLUE_COLOR,
  },
}));
const PrayerMovement = () => {
  const classes = useStyles();
  
  const prayerMovementState = useSelector((state) => state.prayerMovement);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(prayerMovementState ? prayerMovementState.slice(0, 3) : []);

  const handlePaginationChange = (event, value) => {
    setData(prayerMovementState.slice((value - 1) * 3, value * 3));
  };
  const count =
  prayerMovementState.length / 3 - parseInt(prayerMovementState.length / 3) !== 0
      ? parseInt(prayerMovementState.length / 3) + 1
      : parseInt(prayerMovementState.length / 3);

  const styles = {
    width: 80,
    height: 60,
    backgroundImage: backgroundImage,
    title: "Prayer Movement",
    detail: {description:
      "God has been doing a miracle in AIPM Ministry. We have seen God's sovereign hand through prayer",
      titleFont: "h6",
      descriptionFont: "body2",
    },
    borderRadius: 15,
  };
  const titleStyle = {
    textAlign: "center",
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
      title: "January 20, 2024 Ambaricho Mountain Program",
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
      title: "November 10, 40 days fasting and prayer",
      detail: `During the 2nd week of October 2021, AIPM held its annual Missions Conference in Durame. This year we also hosted 100 
      university students and a few high school students that are very interested in serving the Lord as missionaries. In total 250 
      attended the conference. The conference was led by Dr. Desta and Justin Slemp. Justin is a bord member from AIPM USA. 
      The following is the report from both Dr. Desta and Justin. During the 2nd week of October 2021, AIPM held its annual 
      Missions Conference in Durame. This year we also hosted 100 university students and a few high school students that are 
      very interested in serving the Lord as missionaries. In total 250 attended the conference. The conference was led by Dr. Desta 
      and Justin Slemp. Justin is a bord member from AIPM USA. The following is the report from both Dr. Desta and Justin.`,
      imageUrl: `${newsImageFive}`,
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
  ];

  const fetchPrayerMovement = async () => {
    setIsLoading(true);
    const res = await getPrayerMovements();
    setIsLoading(false);
    dispatch(getPrayerMovementAction(items));
    setData(items.slice(0, 3))
  };

  useEffect(() => {
    fetchPrayerMovement();
  }, []);
  return (
    <div className={classes.root}>
      <ImageWithTextCenter styles={styles} />
      <div className={classes.prayerTextContainer}>
        <Typography variant="h4">Prayer Movement in AIPM</Typography>
        <Typography variant="h5">
          If we pray God works, If we don't we will work
        </Typography>
        <Typography variant="body1">quote of (Dr. Desta Langena)</Typography>
      </div>
      <div className={classes.prayerDetail}>
        <Typography>
          During the 2nd week of October 2021, AIPM held its annual Missions
          Conference in Durame. This year we also hosted 100 university students
          and a few high school students that are very interested in serving the
          Lord as missionaries. In total 250 attended the conference. The
          conference was led by Dr. Desta and Justin Slemp. Justin is a bord
          member from AIPM USA. The following is the report from both Dr. Desta
          and Justin. During the 2nd week of October 2021, AIPM held its annual
          Missions Conference in Durame. This year we also hosted 100 university
          students and a few high school students that are very interested in
          serving the Lord as missionaries. In total 250 attended the
          conference. The conference was led by Dr. Desta and Justin Slemp.
          Justin is a bord member from AIPM USA. The following is the report
          from both Dr. Desta and Justin.
        </Typography>
      </div>
      <div className={classes.textImageContainer}>
        {isLoading ? (
          <div className={classes.circularProgress}>
            <CircularProgress />
          </div>
        ) : (
          <div>
            {data.map((item, index) => {
              return (
                <TextImage
                  key={index}
                  nextVal={index}
                  data={item}
                  styles={titleStyle}
                />
              );
            })}
          </div>
        )}
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
    </div>
  );
};

export default PrayerMovement;
