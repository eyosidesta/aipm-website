import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Icon,
  useTheme,
  useMediaQuery,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "96%",
    paddingLeft: "2%",
    paddingRight: "2%",
    paddingTop: "2%",
    paddingBottom: "2%",
  },
  chatBoxContainer: {
    marginTop: 20,
    marginLeft: "15%",
    marginRight: "15%",
  },
  editIconContainer: {
    cursor: "pointer",
    justifyContent: "right",
    paddingRight: "2%",
  },
  detailGridContainer: {
    marginTop: 5,
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 5,
    marginTop: "20%",
  },
  descriptionTwo: {
    marginTop: 10,
  },
}));

const TestimonyListItemDetail = ({ data, setEditMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const greaterThanExtremeSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const handleEditClick = () => {
    setEditMode(false);
  };
  return (
    <div className={classes.root}>
      <Grid
        container
        className={classes.editIconContainer}
        onClick={handleEditClick}
      >
        <Grid item>
          <Icon>edit</Icon>
        </Grid>
      </Grid>
      <Grid container spacing={3}>
        <Grid item>
          <Typography variant="h6">{data.fullName}</Typography>
        </Grid>
        <Grid item>
          {greaterThanExtremeSmall && <Typography variant="h6"> | </Typography>}
        </Grid>
        <Grid item>
          <Typography variant="h6">{data.specialThing}</Typography>
        </Grid>
        <Grid item>
          {greaterThanExtremeSmall && <Typography variant="h6"> | </Typography>}
        </Grid>
        <Grid item>
          <Typography variant="h6">
            {data.servicePlace}
          </Typography>
        </Grid>
      </Grid>
      <Grid container className={classes.detailGridContainer}>
        <Grid item>
          <img src={data.imageUrl} className={classes.image} />
        </Grid>
        <Grid
          item
          xs={12}
          sm
          style={{ marginLeft: greaterThanExtremeSmall && "3%" }}
        >
          <Grid container direction="column">
            <Grid item>
              <Typography varaint="body2">{data.descriptionOne}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.descriptionTwo}>
        <Typography variant="body2">{data.descriptionTwo}</Typography>
      </div>
    </div>
  );
};

export default TestimonyListItemDetail;
