import React from "react";
import { Grid, Typography, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  image: {
    height: 180,
    width: 300,
    borderRadius: "5%"
  },
  title: {
    textAlign: "center",
    marginBottom: 10
  }
}));

const TextFirst = ({data, styles}) => {
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
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
      <Grid item>
        <img src={data.imageUrl} className={classes.image} />
      </Grid>
    </Grid>
  );
};

export default TextFirst;
