import React from "react";
import { makeStyles, Typography } from "@material-ui/core";
import { DEEP_BLUE_COLOR, WHITE_COLOR } from "../../utils/constants/colors";
import backgroundImage from "../../assets/ambaricho_mount.png";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: DEEP_BLUE_COLOR,
  },
  textImageBottom: {
    position: "absolute",
    color: WHITE_COLOR,
    textAlign: "center",
    width: "100%",
    height: "0%",
    margin: "auto",
    left: 0,
    right: 0,
    zIndex: 51,
  },
  detailsContainer: {
    width: "80%",
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  title: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 20,
  },
  description: {
    paddingLeft: "10%",
    paddingRight: "10%",
  },
  descriptionTwo: {
    marginBottom: 10,
  }
}));

const VissionAndMission = () => {
  const classes = useStyles();

  const textMediaQueryCss = {
    extraSmallCss: {
      top: 0,
      bottom: 390,
    },
    smallCss: {
      top: 0,
      bottom: 290,
    },
    mediumCss: {
      top: 0,
      bottom: 300,
    },
    largeCss: {
      top: 200,
      bottom: 0,
    },
    extraLargeCss: {
      top: 200,
      bottom: 0,
    },
  };

  const styles = {
    backgroundImage: backgroundImage,
    title: "AIPM News",
    detail: {
      description: "Ambaricho International Prayer and Mission Movement",
      titleFont: "h6",
      descriptionFont: "body2",
    },
    borderRadius: 15,
  };
  return (
    <div className={classes.root}>
      {/* <div
        className={classes.textImageBottom}
        style={
          extraSmall
            ? textMediaQueryCss.extraSmallCss
            : small
            ? textMediaQueryCss.smallCss
            : medium
            ? textMediaQueryCss.mediumCss
            : large
            ? textMediaQueryCss.largeCss
            : textMediaQueryCss.extraLargeCss
        }
      >
      </div> */}
      <div className={classes.detailsContainer}>
        <Typography variant="h6" className={classes.title}>Vision</Typography>
        <Typography variant="body2" className={classes.descriptionTwo}>
          Ambaricho International Prayer and Mission Movement USA (AIPM USA), is
          a partner with Ambaricho International Prayer and Mission Movement
          (AIPM in Ethiopia, a dynamic grassroots movement of prayer and
          missions outreach centered in Southern Ethiopia. AIPM USA is directed
          by a Board of Directors which function as an Incorporated Not for
          Profit Corporation in the United States, registered in the state of
          Indiana.
        </Typography>
        <Typography variant="body2">
          Ambaricho International Prayer and Mission Movement USA (AIPM USA), is
          a partner with Ambaricho International Prayer and Mission Movement
          (AIPM in Ethiopia, a dynamic grassroots movement of prayer and
          missions outreach centered in Southern Ethiopia. AIPM USA is directed
          by a Board of Directors which function as an Incorporated Not for
          Profit Corporation in the United States, registered in the state of
          Indiana.
        </Typography>
        <Typography variant="h6" className={classes.title}>Mission</Typography>
        <Typography variant="body2" className={classes.descriptionTwo}>
          Ambaricho International Prayer and Mission Movement USA (AIPM USA), is
          a partner with Ambaricho International Prayer and Mission Movement
          (AIPM in Ethiopia, a dynamic grassroots movement of prayer and
          missions outreach centered in Southern Ethiopia. AIPM USA is directed
          by a Board of Directors which function as an Incorporated Not for
          Profit Corporation in the United States, registered in the state of
          Indiana.
        </Typography>
        <Typography variant="body2">
          Ambaricho International Prayer and Mission Movement USA (AIPM USA), is
          a partner with Ambaricho International Prayer and Mission Movement
          (AIPM in Ethiopia, a dynamic grassroots movement of prayer and
          missions outreach centered in Southern Ethiopia. AIPM USA is directed
          by a Board of Directors which function as an Incorporated Not for
          Profit Corporation in the United States, registered in the state of
          Indiana.
        </Typography>
      </div>
    </div>
  );
};

export default VissionAndMission;
