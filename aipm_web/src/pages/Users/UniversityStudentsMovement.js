import React, { useState, useEffect } from "react";
import { makeStyles, Typography, CircularProgress } from "@material-ui/core";
import { Pagination } from "@material-ui/lab";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import newsImageFive from "../../assets/home_new_img.png";
import newsImageFour from "../../assets/home_image_two.jpg";
import newsImageSeven from "../../assets/AIPM_LOGO.png";
import newsImageOne from "../../assets/news_image_one.png";
import newsImageTwo from "../../assets/news_image_two.JPG";
import newsImageThree from "../../assets/news_image_three.JPG";
import TextImage from "../../components/Shared/TextImage";

const useStyles = makeStyles((themes) => ({
  root: {
    color: DEEP_BLUE_COLOR,
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  title: {
    textAlign: "center",
  },
  description: {
    marginTop: 10,
    marginBottom: 30,
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

const UniversityStudentsMovement = () => {
  const classes = useStyles();
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

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(items ? items.slice(0, 3) : []);

  const handleChange = (event, value) => {
    setData(items.slice((value - 1) * 3, value * 3));
  };
  const count =
    items.length / 3 - parseInt(items.length / 3) !== 0
      ? parseInt(items.length / 3) + 1
      : parseInt(items.length / 3);

  const fetchUniversityStudentsMovement = async () => {
  };

  useEffect(() => {
    fetchUniversityStudentsMovement();
  }, []);

  const titleStyle = {
    textAlign: "start",
    marginBottom: 10,
  };

  return (
    <div className={classes.root}>
      <Typography variant="h3" className={classes.title}>
        Hawassa University Students Movement
      </Typography>
      <Typography className={classes.description}>
        During the 2nd week of October 2021, AIPM held its annual Missions
        Conference in Durame. This year we also hosted 100 university students
        and a few high school students that are very interested in serving the
        Lord as missionaries. In total 250 attended the conference. The
        conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin. During the 2nd week of October 2021, AIPM held its annual
        Missions Conference in Durame. This year we also hosted 100 university
        students and a few high school students that are very interested in
        serving the Lord as missionaries. In total 250 attended the conference.
        The conference was led by Dr. Desta and Justin Slemp.
      </Typography>
      <Typography variant="h3" className={classes.title}>
        Hossana University Students Movement
      </Typography>
      <Typography className={classes.description}>
        During the 2nd week of October 2021, AIPM held its annual Missions
        Conference in Durame. This year we also hosted 100 university students
        and a few high school students that are very interested in serving the
        Lord as missionaries. In total 250 attended the conference. The
        conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin. During the 2nd week of October 2021, AIPM held its annual
        Missions Conference in Durame. This year we also hosted 100 university
        students and a few high school students that are very interested in
        serving the Lord as missionaries. In total 250 attended the conference.
        The conference was led by Dr. Desta and Justin Slemp.
      </Typography>
      <Typography variant="h3" className={classes.title}>
        Jimma University Students Movement
      </Typography>
      <Typography className={classes.description}>
        During the 2nd week of October 2021, AIPM held its annual Missions
        Conference in Durame. This year we also hosted 100 university students
        and a few high school students that are very interested in serving the
        Lord as missionaries. In total 250 attended the conference. The
        conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin. During the 2nd week of October 2021, AIPM held its annual
        Missions Conference in Durame. This year we also hosted 100 university
        students and a few high school students that are very interested in
        serving the Lord as missionaries. In total 250 attended the conference.
        The conference was led by Dr. Desta and Justin Slemp.
        and Justin.
      </Typography>
      <Typography variant="h3" className={classes.title}>
        Addis Ababa University Students Movement
      </Typography>
      <Typography className={classes.description}>
        During the 2nd week of October 2021, AIPM held its annual Missions
        Conference in Durame. This year we also hosted 100 university students
        and a few high school students that are very interested in serving the
        Lord as missionaries. In total 250 attended the conference. The
        conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin. During the 2nd week of October 2021, AIPM held its annual
        Missions Conference in Durame. This year we also hosted 100 university
        students and a few high school students that are very interested in
        serving the Lord as missionaries. In total 250 attended the conference.
        The conference was led by Dr. Desta and Justin Slemp.
      </Typography>
      {isLoading ? (
        <div className={classes.circularProgress}>
          <CircularProgress />
        </div>
      ) : (
        <div>
          {data.map((item, index) => {
            return <TextImage key={index} data={item} styles={titleStyle} />;
          })}
        </div>
      )}
      {items.length > 3 && (
        <Pagination
          className={classes.pagination}
          onChange={handleChange}
          count={count}
          variant="outlined"
          shape="rounded"
        />
      )}
    </div>
  );
};

export default UniversityStudentsMovement;
