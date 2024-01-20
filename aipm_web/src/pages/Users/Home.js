import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import {
  BACKGROUND_COLOR,
  DEEP_BLUE_COLOR,
  WHITE_COLOR,
} from "../../utils/constants/colors";
import backgroundImage from "../../assets/home_new_img.png";
import homeImageOne from "../../assets/home_image_one.png";
import homeImageTwo from "../../assets/home_image_two.jpg";
import HomeTickets from "../../components/Users/Home/HomeTickets";
import ImageWithTextCenter from "../../components/Shared/ImageWithTextCenter";
import TextImage from "../../components/Shared/TextImage";

const useStyles = makeStyles((theme) => ({
  root: {
    background: BACKGROUND_COLOR,
    color: DEEP_BLUE_COLOR,
  },
  image: {
    maxHeight: "75vh",
    width: "100%",
    marginBottom: 30,
  },
  prayerMovement: {
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 30,
    marginBottom: 10,
  },
  prayerTitle: {
    marginBottom: 10,
  },
  imageContainer: {
    position: "relative",
    color: WHITE_COLOR,
  },
  aipmText: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    height: "0%",
    margin: "auto",
    top: 0,
    left: 0,
    bottom: 190,
    right: 0,
    zIndex: 51,
  },
  aipmTitle: {
    fontSize: "8vw",
    paddingBottom: 20,
  },
  aipmDetail: {
    fontSize: "4vw",
  },
  movementDescription: {
    paddingLeft: 50,
    paddingRight: 50,
  },
  textImageContainer: {
    marginTop: 30,
    width: "94%",
    paddingLeft: "3%",
    paddingLeft: "3%",
  },
}));
function Home() {
  const classes = useStyles();
  const items = [
    {
      title: "How AIPM Stablished",
      detail: `This is about an incredible movement called Ambaricho 
      International Prayer and Mission Movement (AIPM)
      The movement was started on 3,028 meters (9,932 feet) Mountain 
      called Ambaricho. This mountain is located 350 KM (220 miles) 
      to the south from the capital, Addis Ababa. 
      Ambaricho was the seat of a witchdoctor family called Abba Sarecho. 
      Abba Sarecho’s family was worshipped for more than 500 years, where 
      tens of thousands of people were gathering each year to worship the 
      consecutive Abba-Sarechos. Missionaries arrived to the southern part of 
      Ethiopia in late 1920s and afterwards from the USA, Canada, Australia, 
      England and New Zealand. Their faithful endeavor brought about the 
      conversion of natives who were very bold to share their faith in Christ. 
      Their day and night prayer fueled the spread of the Gospel, which 
      transformed the lives of people. To that effect currently over 
      95% of the Kambatta tribe are evangelical Christians. The last Abba Sarecho, 
      who is still alive, became a follower of Jesus Christ, and the very place where 
      he was worshipped also became the place of this prayer movement and missionary sending center. `,
      imageUrl: `${homeImageOne}`,
    },
    {
      title: "The Founder of AIPM and it's history behind",
      detail: `God used Dr. Desta Langena Letta, as the founder and Director of AIPM. 
      He received his degree in Physics from Addis Ababa University and did his MA in 
      missions in Singapore. He received his Doctoral degree in missiology at Western 
      Seminary in Portland Oregon, USA. He directed the Ethiopian Kale Heywet missionary 
      training school for 6 years before his study at Western. All these experiences equipped 
      him to be a catalyst for the commencement and growth of this movement (AIPM). Every 
      January 19th an average of 150,000 Christians are gathering on the top of Mount Ambaricho 
      to pray and fast for World Evangelism. has sent over 300 missionaries and is praying to 
      send more than 1,000 missionaries to the unreached people groups of Ethiopia. Planning 
      is underway to start sending missionary families soon outside Ethiopia, as the Lord provides support. 
      The Governor of the Durame district dedicated Ambaricho to God as a place of prayer and 
      to build prayer houses on the very top of the mountain.
      `,
      imageUrl: `${homeImageTwo}`,
    },
  ];

  const styles = {
    width: 100,
    height: 75,
    backgroundImage: backgroundImage,
    title: "AIPM",
    detail: {
      description: "Ambaricho International Prayer And Mission Movement",
      titleFont: "h3",
      descriptionFont: "h6",
    },
    borderRadius: 0,
  };
  const titleStyle = {
    textAlign: "center",
    marginBottom: 10,
  };
  return (
    <div className={classes.root}>
      <ImageWithTextCenter styles={styles} />
      <div className={classes.textImageContainer}>
        {items.map((item, index) => {
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
      <div className={classes.prayerMovement}>
        <Typography variant="h6" className={classes.prayerTitle}>
          Prayer and Mission Movement
        </Typography>
        <Typography variant="body2" className={classes.movementDescription}>
          Missionaries supported by AIPM serve in unreached areas of Ethiopia.
          In addition, we give support to a few missionaries serving in India,
          Pakistan and South Sudan.
          {/* </Typography>
        <Typography variant="body2"> */}
          This movement got its name, Ambaricho International Prayer and
          Missions Movement (AIPM) because of its focus on prayer for revival
          and renewal of existing churches
        </Typography>
      </div>
      <HomeTickets />
    </div>
  );
}
export default Home;
