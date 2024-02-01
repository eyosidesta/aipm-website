import { Grid, Paper, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
    paper: {
        "& > *": {
          width: theme.spacing(4),
          height: theme.spacing(4),
          color: "white",
        },
      },
      package: {
          gap: 10,
          paddingLeft: 80,
      },
      packageText: {
          paddingLeft: 80,
      }
}))
const TicketContainer = ({ticketItem}) => {
    const classes = useStyles();
    return (
        <Grid item container xs={12} sm={6} md={4} className={classes.package}>
          <Grid item container className={classes.package}>
            <Grid item className={classes.paper}>
              <Paper elevation={3} />
            </Grid>
            <Grid item>
              <Typography variant="h6">{ticketItem.title}</Typography>
            </Grid>
          </Grid>
          <Grid item className={classes.packageText}>
            <Typography variant="body2">{ticketItem.detailOne}</Typography>
            <Typography variant="body2">{ticketItem.detailTwo}</Typography>
          </Grid>
        </Grid>
    )
}

export default TicketContainer;