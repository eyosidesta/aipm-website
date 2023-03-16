import React from "react";
import { Typography, makeStyles } from "@material-ui/core"
import { DEEP_BLUE_COLOR } from "../../../utils/constants/colors";

const useStyles = makeStyles((theme) => ({
    root: {
        color: DEEP_BLUE_COLOR,
        paddingLeft: "5%",
        paddingRight: "5%"
    },
    title: {
        marginBottom: 20,
        marginTop: 30
    },
    detailOne: {
        marginBottom: 15
    },
    detailTwo: {
        marginBottom: 30
    }
}))
const TitleDetail = ({ title, detailOne, detailTwo }) => {
    const classes = useStyles();
    return (
      <div className={classes.root}>
        <Typography variant="h5" className={classes.title}>{title}</Typography>
        <Typography className={classes.detailOne}>{detailOne}</Typography>
        <Typography className={classes.detailTwo}>{detailTwo}</Typography>
      </div>
    );
  };

  export default TitleDetail;
  