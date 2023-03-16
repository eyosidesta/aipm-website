import React from "react";
import { Grid, Typography, Icon, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    icon: {
        textAlign: "center",
    }
}));
const ContactUsGrid = ({data}) => {
    const classes = useStyles();
    return (
        <Grid item xs={12} sm className={classes.icon}>
          <Grid container direction="column">
            <Grid item>
              <Icon
                fontSize="large"
                style={{
                  paddingLeft: "2%",
                }}
                aria-hidden="true"
                className={data.icon}
              />
            </Grid>
            <Grid item>
              <Typography variant="h6">{data.title}</Typography>
            </Grid>
            <Grid item>{data.descriptionOne}</Grid>
            <Grid item>{data.descriptionTwo}</Grid>
          </Grid>
        </Grid>
    );
}

export default ContactUsGrid;