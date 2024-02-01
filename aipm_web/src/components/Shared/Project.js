import React from "react";
import {
  makeStyles,
  Typography,
  Grid,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 30,
  },
  title: {
    textAlign: "center",
    marginBottom: 30,
  },
  image: {
    textAlign: "center",
    height: 280,
    width: 400,
    marginBottom: 40,
    alignContent: "center",
    backgroundColor: "red",
  },
  imageContainer: {
    justifyContent: "center"
  },
  firstParagraph: {
    width: "80%",
    paddingLeft: "10%",
    paddingRight: "10%",
    marginBottom: 30,
  },
  secondTitle: {
    textAlign: "center"
  },
  imageItems: {
    height: 100,
    width: 200,
  },
  imageListContainer: {
    width: "100%",
    margin: "auto",
  },
  supportMessage: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  bankName: {
    marginBottom: 2,
  },
  payLink: {
    cursor: "pointer",
  },
}));

const Project = ({ data }) => {
  const classes = useStyles();

  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));

  return (
    <div className={classes.root}>
      <Typography variant="h6" className={classes.title}>
        {data.title}
      </Typography>
      <Grid container className={classes.imageContainer}>
        <Grid item>
        <img src={data.projectImage} className={classes.image} />
        </Grid>
      </Grid>
      <Typography variant="body2" className={classes.firstParagraph}>
        {data.firstParagraph}
      </Typography>
      <Typography variant="h6" className={classes.secondTitle}>
        {data.secondTitle}
      </Typography>
      <Grid container spacing={3} className={classes.imageListContainer}>
        {data.projectImageLists.map((item, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={3}
              key={index}
              style={{ textAlign: "center" }}
            >
              <img src={item} className={classes.imageItems} />
            </Grid>
          );
        })}
      </Grid>
      <Typography variant="h6" className={classes.supportMessage}>
        {data.supportMessage}
      </Typography>
      <Grid
        container
        spacing={3}
        style={{
          width: "80%",
          paddingLeft: extraSmall ? "15%" : "25%",
          paddringRight: extraSmall ? "15%" : "25%",
        }}
      >
        <Grid item xs={12} sm>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="body2" className={classes.bankName}>
                {data.bankName}
              </Typography>
              <Typography variant="body2">{data.bankAccount}</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="body2" className={classes.bankName}>
                {data.payOnline}?
              </Typography>
              <a href="https://www.aipmusa.com/support/" target="_blank">
                Click here
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Project;
