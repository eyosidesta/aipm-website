import React from "react";
import {
  Grid,
  makeStyles,
  Paper,
  Typography,
  Container,
} from "@material-ui/core";
import TicketContainer from "./TicketContainer";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30
    // marginLeft: 20,
  },
  container: {
    margin: 0,
    width: "100%"
  }
}));
const HomeTickets = () => {
  const classes = useStyles();

  const ticketItems = [
    {
      title: "Prayer",
      detailOne: "If we Pray God works,",
      detailTwo: "If we don't pray we work"
    },
    {
      title: "Mission",
      detailOne: "If we Pray God works,",
      detailTwo: "If we don't pray we work"
    },
    {
      title: "Discipleship",
      detailOne: "If we Pray God works,",
      detailTwo: "If we don't pray we work"
    },
    {
      title: "Partnership",
      detailOne: "If we Pray God works,",
      detailTwo: "If we don't pray we work"
    },
    {
      title: "Missionaries",
      detailOne: "If we Pray God works,",
      detailTwo: "If we don't pray we work"
    },
    {
      title: "Church Planting",
      detailOne: "If we Pray God works,",
      detailTwo: "If we don't pray we work"
    }
    
  ];
  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.container}>
        {ticketItems.map((item, index) => {
          return (
            <TicketContainer key={index} ticketItem={item} />
          )
        })}
      </Grid>
    </div>
  );
};

export default HomeTickets;
