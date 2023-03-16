import React from "react";
import { Typography, makeStyles } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import TitleDetail from "../../components/Users/Values/TitleDetail";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    color: DEEP_BLUE_COLOR,
  },
  valueTextContainer: {
    textAlign: "center",
  },
}));
const valueDetails = [
  {
    title: "Preach The Gosple",
    detailOne: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
  (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
  of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    detailTwo: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
  (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
  of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
  },
  {
    title: "Plant The Church",
    detailOne: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
  (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
  of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    detailTwo: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
  (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
  of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
  },
  {
    title: "Make Discipleship",
    detailOne: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
  (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
  of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    detailTwo: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
  (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
  of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
  },
];

const Values = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.valueTextContainer}>
        <Typography variant="h4">Values</Typography>
        <Typography vairant="h6">
          Ambaricho International Prayer and Mission Movement
        </Typography>
        <Typography variant="caption">
          as a mission movement mobilization movement team we believe that the
          following are our values
        </Typography>
      </div>
      {valueDetails.map((item, index) => {
        return (
          <TitleDetail
            key={index}
            title={item.title}
            detailOne={item.detailOne}
            detailTwo={item.detailTwo}
          />
        );
      })}
    </div>
  );
};

export default Values;
