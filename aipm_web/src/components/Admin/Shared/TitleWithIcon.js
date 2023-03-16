import React, { useState } from "react";
import { Grid, makeStyles, Typography, useTheme, useMediaQuery } from "@material-ui/core";
import { WHITE_COLOR } from "../../../utils/constants/colors";
import { ArrowDropDown, ArrowDropUp } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  titleContainer: {
    cursor: "pointer",
    border: "solid",
    textAlign: "center",
    backgroundColor: WHITE_COLOR,
    paddingLeft: "2%",
    borderRadius: 5,
    alignItems: "center"
  },
  dropDownIcon: {
    // paddingTop: 2,
    alignItems: "center",
    paddingLeft: 10,
  },
}));

const TitleWithIcon = ({ title, isIconUp, setIsIconUp }) => {
  const classes = useStyles();
  const theme = useTheme();
  const extremeLarge = useMediaQuery(theme.breakpoints.up("xl"));
  const handleOnCliick = () => {
    setIsIconUp(!isIconUp);
  };
  return (
    <Grid container className={classes.titleContainer} onClick={handleOnCliick} style={{width: extremeLarge ? 190 : 170}}>
      <Grid item>
        <Typography variant="h6">{title}</Typography>
      </Grid>
      <Grid item className={classes.dropDownIcon}>
        {isIconUp ? <ArrowDropUp fontSize="large" />  : <ArrowDropDown fontSize="large"/>}
      </Grid>
    </Grid>
  );
};

export default TitleWithIcon;
