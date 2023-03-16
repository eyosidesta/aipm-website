import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
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
  addStudentsMovement,
  updatStudentsMovement,
} from "../../../utils/ApiService/university.students.movement";
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

const StudentsForm = ({ data, setEditMode }) => {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("University Students Movement Added Successfully!");
  const [loading, setLoading] = useState(false);
  const [studentsMovementInfo, setStudentsMovementInfo] = useState(
    data
      ? {
          id: data.id,
          title: data.title,
          detail: data.detail,
        }
      : {
          title: "",
          detail: "",
        }
  );

  const theme = useTheme();
  const greaterThanExtremeSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const handleTitleChange = (event) => {
    let updateTitle = { title: event.target.value };
    setStudentsMovementInfo((studentsMovementInfo) => ({
      ...studentsMovementInfo,
      ...updateTitle,
    }));
  };
  const handleDetailChange = (event) => {
    let updateDetail = { detail: event.target.value };
    setStudentsMovementInfo((studentsMovementInfo) => ({
      ...studentsMovementInfo,
      ...updateDetail,
    }));
  };

  const handleSubmitClick = async () => {
    setLoading(true);
    if (!data) {
      const res = await addStudentsMovement(studentsMovementInfo);
      if (!(res.statusText == "")) {
        setMessage("Error! Unable to update students movement, try gain");
        setType("error");
      }
    } else {
      const res = await updatStudentsMovement(studentsMovementInfo);
      if (!(res.statusText == "")) {
        setMessage("Error! Unable to update students movement, try again");
        setType("error");
      } else {
        setMessage("Students Movement Updated Successfully!")
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
    setStudentsMovementInfo(() => ({
      title: "",
      detail: "",
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
                <Typography variant="h6">Title</Typography>
                {false ? (
                  <TextField
                    id="standard-basic"
                    value={studentsMovementInfo.title}
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  />
                ) : (
                  <TextField
                    id="standard-basic"
                    error
                    helperText="title is required"
                    value={studentsMovementInfo.title}
                    onChange={handleTitleChange}
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  />
                )}
                <Typography variant="h6">Description</Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="add university students movement here"
                  value={studentsMovementInfo.detail}
                  onChange={handleDetailChange}
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

export default StudentsForm;
