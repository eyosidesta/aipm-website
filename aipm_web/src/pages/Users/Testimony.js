import React, { useEffect, useState } from "react";
import {
  CircularProgress,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import { useSelector, useDispatch } from "react-redux";
import backgroundImage from "../../assets/testimony_image.png";
import CardContainer from "../../components/Users/Testimony/CardContainer";
import ImageWithTextCenter from "../../components/Shared/ImageWithTextCenter";
import Modals from "../../components/Shared/Modal";
import tamiruImage from "../../assets/staff_images/tamiruImage.png";
import testimonyTwoImage from "../../assets/ambaricho_mount.png";
import testimonyThree from "../../assets/testimony_image.png";
import testimonyFour from "../../assets/prayer_background.png";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
  root: {
    color: DEEP_BLUE_COLOR,
  },
  title: {
    marginTop: 30,
    textAlign: "center",
  },
  detail: {
    marginTop: 30,
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  cards: {
    paddingLeft: 30,
  },
  cardContainer: {
    width: "85%",
  },
  circularProgress: {
    textAlign: "center",
  },
  circularColor: {
    color: DEEP_BLUE_COLOR,
  },
}));
const Testimony = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [modalValue, setModalValue] = useState({});
  const toggleModal = (id) => {
    const modalVal = items.filter((item) => {
      return item.id == id;
    });
    setModalValue(modalVal[0]);
    setOpen(true);
  };
  const items = [
    {
      id: 1,
      name: "Aba Gole",
      servicePlace: "Missionary in Gambela",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl: tamiruImage,
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
      name: "Ababa Wandaro",
      servicePlace: "Missionary In Bale",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl: testimonyTwoImage,
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
      name: "Desta Langena",
      servicePlace: "Missionary In Gojam",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl: testimonyThree,
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
      name: "Tamiru Langena",
      servicePlace: "Missionary in Afar",
      specialThing: "The First AIPM Ministry Missionary",
      imageUrl: testimonyFour,
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
  const styles = {
    width: 80,
    height: 60,
    backgroundImage: backgroundImage,
    title: "Testimonies",
    detail: {
      description: "",
      titleFont: "h6",
      descriptionFont: "body2",
      color: DEEP_BLUE_COLOR,
    },
    borderRadius: 15,
  };

  const [isLoading, setIsLoading] = useState(false);
  // const [data, setData] = useState(items ? items.slice(0, 3) : []);
  const [data, setData] = useState(items ? items.slice(0, 3) : []);

  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));
  const small = useMediaQuery(theme.breakpoints.down("sm"));
  const medium = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <div className={classes.root}>
      <ImageWithTextCenter styles={styles} />
      <Typography variant="h5" className={classes.title}>
        Testimonies
      </Typography>
      <Typography variant="body2" className={classes.detail}>
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
        The conference was led by Dr. Desta and Justin Slemp. Justin is a bord
        member from AIPM USA. The following is the report from both Dr. Desta
        and Justin.
      </Typography>
      <Typography variant="h6" className={classes.title}>
        Missionaries Testimony
      </Typography>
      <Modals open={open} setOpen={setOpen} modalData={modalValue} />
      <div className={classes.cards}>
        <div
          className={classes.cardContainer}
          style={{
            paddingLeft: extraSmall
              ? "18%"
              : small
              ? "11%"
              : medium
              ? "9%"
              : "8%",
          }}
        >
          {isLoading ? (
            <div className={classes.circularProgress}>
              <CircularProgress />
            </div>
          ) : (
            <div>
              <CardContainer testimonies={data} toggleModal={toggleModal} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Testimony;
