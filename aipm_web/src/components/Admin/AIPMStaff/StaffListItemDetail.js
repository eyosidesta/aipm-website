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
  responsibility: {
    marginTop: 10,
  },
  passionContainer: {
    marginTop: 8,
  },
}));

const StaffListItemDetail = ({ data, setEditMode }) => {
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
          <Typography variant="h6">{data.aipmService}</Typography>
        </Grid>
        <Grid item>
          {greaterThanExtremeSmall && <Typography variant="h6"> | </Typography>}
        </Grid>
        <Grid item>
          <Typography variant="h6">
            {data.staffLocation == "Ethiopia"
              ? "Ethiopian AIPM Staff Member"
              : "USA AIPM Staff Member"}
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
            <Grid item style={{ marginBottom: "1%" }}>
              <Typography variant="h6">Who is {data.fullName}</Typography>
            </Grid>
            <Grid item>
              <Typography varaint="body2">{data.whoIsHe}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <div className={classes.responsibility}>
        <Typography variant="h6">AIPM Responsibility</Typography>
        <Typography variant="body2">{data.responsibility}</Typography>
      </div>
      <div className={classes.passionContainer}>
        <Typography variant="h6">
          {data.gender == "Male" ? "His" : "Her"} Passion
        </Typography>
        <Typography variant="body2">{data.passion}</Typography>
      </div>
    </div>
  );
};

export default StaffListItemDetail;
