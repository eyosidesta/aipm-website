import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
  Select,
  Icon,
  CircularProgress,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import {
  DEEP_BLUE_COLOR,
  WHITE_COLOR,
  BACKGROUND_COLOR,
} from "../../../utils/constants/colors";
import {
  addTestimony,
  updatTestimony,
} from "../../../utils/ApiService/testimony.api";
import { Formik } from "formik";
import SnackBar from "../../Shared/SnackBar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: WHITE_COLOR,
    border: "solid",
    borderRadius: 5,
    color: DEEP_BLUE_COLOR,
  },
  gridContainer: {
    width: "100%",
    margin: "auto",
    marginBottom: 30,
    marginTop: 30,
    marginLeft: 20,
  },
  imageInput: {
    display: "none",
  },
  imageUploadButton: {
    backgroundColor: BACKGROUND_COLOR,
  },
  formControl: {
    minWidth: 300,
  },
  textField: {
    minWidth: 300,
  },
  buttonContainer: {
    marginTop: 20,
    marginLeft: "10%",
  },
  cancelButton: {
    backgroundColor: WHITE_COLOR,
    color: DEEP_BLUE_COLOR,
    borderRadius: 7,
    marginRight: 10,
  },
  submitButton: {
    backgroundColor: WHITE_COLOR,
    color: DEEP_BLUE_COLOR,
    borderRadius: 7,
  },
  submitButtonWrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },
  circularProgress: {
    color: green[500],
    position: "absolute",
    marginTop: 2,
  },
  multilineTextField: {
    borderRadius: 5,
    border: "solid",
    borderWidth: 1,
  },
  ClearIcon: {
    marginRight: "5%",
    cursor: "pointer"
  },
}));

const TestimonyForm = ({ data, setEditMode }) => {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("Testimony Added Successfully!");
  const [loading, setLoading] = useState(false);
  const [testimonyInfo, setTestimonyfInfo] = useState(
    data
      ? {
          id: data.id,
          fullName: data.fullName,
          title: "",
          servicePlace: data.servicePlace,
          specialThing: data.specialThing,
          descriptionOne: data.descriptionOne,
          descriptionTwo: data.descriptionTwo,
        }
      : {
          fullName: "",
          servicePlace: "",
          specialThing: "",
          descriptionOne: "",
          descriptionTwo: "",
        }
  );

  const theme = useTheme();
  const greaterThanExtremeSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const handleFullNameChange = (event) => {
    let updateFullName = { fullName: event.target.value };
    setTestimonyfInfo((testimonyInfo) => ({
      ...testimonyInfo,
      ...updateFullName,
    }));
  };
  const handleServicePlaceChange = (event) => {
    let updateServicePlace = { servicePlace: event.target.value };
    setTestimonyfInfo((testimonyInfo) => ({
      ...testimonyInfo,
      ...updateServicePlace,
    }));
  };
  const handleSpecialThingChange = (event) => {
    let updateSpecialThing = { specialThing: event.target.value };
    setTestimonyfInfo((testimonyInfo) => ({
      ...testimonyInfo,
      ...updateSpecialThing,
    }));
  };
  const handleDescriptionOneChange = (event) => {
    let updateDescriptionOne = { descriptionOne: event.target.value };
    setTestimonyfInfo((testimonyInfo) => ({
      ...testimonyInfo,
      ...updateDescriptionOne,
    }));
  };

  const handleDescriptionTwoChange = (event) => {
    let updateDescriptionTwo = { descriptionTwo: event.target.value };
    setTestimonyfInfo((testimonyInfo) => ({
      ...testimonyInfo,
      ...updateDescriptionTwo,
    }));
  };

  const handleSubmitClick = async () => {
    setLoading(true);
    if (!data) {
      const res = await addTestimony(testimonyInfo);
      if (!(res.statusText == "")) {
        setMessage("Error! Unable to add testimony, try again");
        setType("error");
      }
    } else {
      const res = await updatTestimony(testimonyInfo);
      if (!(res.statusText == "")) {
        setMessage("Error! Unable to update testimony, try again");
        setType("error");
      } else {
        setMessage("Testimony Updated Successfully!")
      }
    }
    setLoading(false);
    setOpenSnackbar(true);
    setTimeout(() => {
      setOpenSnackbar(false);
      window.location.reload(false);
    }, 3000);
  };

  const handleCancelClick = () => {
    setTestimonyfInfo(() => ({
      fullName: "",
      servicePlace: "",
      descriptionOne: "",
      specialThing: "",
      descriptionTwo: "",
    }));
  };

  const handleClearIconClick = () => {
    setEditMode(true);
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={3} className={classes.gridContainer}>
        <Grid item xs={12} sm={3}>
          <input
            className={classes.imageInput}
            accept="image/*"
            type="file"
            id="contained-button-file"
            multiple
          />
          <label htmlFor="contained-button-file">
            <Button
              variant="contained"
              className={classes.imageUploadButton}
              style={{ marginTop: greaterThanExtremeSmall && 50 }}
              component="span"
            >
              Upload
            </Button>
          </label>
        </Grid>
        <Grid item xs={12} sm>
          <Grid container direction="column">
            <Grid item>
              <form noValidate autoComplete="off">
                <Typography variant="h6">Full Name</Typography>
                {false ? (
                  <TextField
                    id="standard-basic"
                    value={testimonyInfo.fullName}
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  />
                ) : (
                  <TextField
                    id="standard-basic"
                    error
                    helperText="full name is required"
                    value={testimonyInfo.fullName}
                    onChange={handleFullNameChange}
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  />
                )}
                <Typography variant="h6">Service Place</Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="ex. Missionary at Senbete Shalla"
                  value={testimonyInfo.servicePlace}
                  onChange={handleServicePlaceChange}
                  multiline
                  rows={4}
                  className={classes.multilineTextField}
                  style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                />
                <Typography variant="h6">Special Thing</Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="ex. The First AIPM Ministry Missionary"
                  value={testimonyInfo.specialThing}
                  onChange={handleSpecialThingChange}
                  multiline
                  rows={4}
                  className={classes.multilineTextField}
                  style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                />
                <Typography variant="h6">Detail Description</Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="write the testimony in detail"
                  value={testimonyInfo.descriptionOne}
                  onChange={handleDescriptionOneChange}
                  multiline
                  rows={4}
                  className={classes.multilineTextField}
                  style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                />
                <Typography variant="h6">Add More Detail</Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="add additional detail here"
                  value={testimonyInfo.descriptionTwo}
                  onChange={handleDescriptionTwoChange}
                  multiline
                  rows={4}
                  className={classes.multilineTextField}
                  style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                />
                <div className={classes.buttonContainer}>
                  <Button
                    variant="contained"
                    disabled={loading}
                    className={classes.cancelButton}
                    onClick={handleCancelClick}
                  >
                    cancel
                  </Button>
                  <span className={classes.submitButtonWrapper}>
                    <Button
                      variant="contained"
                      className={classes.submitButton}
                      disabled={loading}
                      onClick={handleSubmitClick}
                    >
                      Submit
                    </Button>
                  </span>
                  {loading && (
                    <CircularProgress
                      size={24}
                      className={classes.circularProgress}
                    />
                  )}
                </div>
              </form>
            </Grid>
          </Grid>
        </Grid>
        {data && (
          <Grid
            item
            className={classes.ClearIcon}
            onClick={handleClearIconClick}
          >
            <Icon>clear</Icon>
          </Grid>
        )}
      </Grid>
      <SnackBar openSnackbar={openSnackbar} message={message} type={type} />
    </div>
  );
};

export default TestimonyForm;
