import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";
import whoWeAreImage from "../../../assets/ambaricho_mount.png";

const useStyles = makeStyles((theme) => ({
    image: {
        height: 180,
        width: 300,
        borderRadius: "5%",
      },
}))
const TitleContainer = () => {
    const classes = useStyles();
    return (
        <Grid container spacing={3}>
        <Grid item container xs={12} sm>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h4">AIPM</Typography>
            </Grid>
            <Grid item style={{ marginBottom: 10 }}>
              <Typography variant="h6">
                Ambaricho International <br/> Prayer and Mission Movement
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">
                Ambaricho International Prayer and Mission Movement USA (AIPM
                USA), is a partner with Ambaricho International Prayer and
                Mission Movement (AIPM in Ethiopia, a dynamic grassroots
                movement of prayer and missions outreach centered in Southern
                Ethiopia. AIPM USA is directed by a Board of Directors which
                function as an Incorporated Not for Profit Corporation in the
                United States, registered in the state of Indiana.
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img src={whoWeAreImage} className={classes.image} />
        </Grid>
      </Grid>
    )
}
export default TitleContainer;