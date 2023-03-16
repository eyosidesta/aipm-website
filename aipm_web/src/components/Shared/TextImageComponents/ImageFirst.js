import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  image: {
    height: 180,
    width: 300,
    borderRadius: "5%"
  },
  title: {
    textAlign: "start",
    marginBottom: 10
  }
}));

const ImageFirst = ({data, styles}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      <Grid item>
        <img src={data.imageUrl} className={classes.image} />
      </Grid>
      <Grid item container xs={12} sm>
        <Grid container direction="column">
          <Grid item style={{textAlign: styles.textAlign, marginBottom: styles.marginBottom}}>
            <Typography variant="h6">
              {data.title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant="body2">{data.detail}</Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ImageFirst;
