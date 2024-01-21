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
import { addNews, updatNews } from "../../../utils/ApiService/news.api";
import { Formik } from "formik";
import DeleteIcon from "@material-ui/icons/Delete";
import FormError from "../Shared/FormError";
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
    cursor: "pointer",
  },
  newsImage: {
    marginTop: 10,
    width: 100,
    height: 100,
  },
  imageRemove: {
    cursor: "pointer"
  }
}));

const NewsForm = ({ data, setEditMode }) => {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("News Added Successfully!");
  const [loading, setLoading] = useState(false);
  const [newsImage, setNewsImage] = useState(data ? data.newsImage : "");

  const theme = useTheme();
  const greaterThanExtremeSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const handleImageChange = (event) => {
    setNewsImage(URL.createObjectURL(event.target.files[0]));
  };

  const handleRemoveImage = () => {
    setNewsImage("");
  }

  const handleSubmitClick = async (values) => {
    setLoading(true);
    if (!data) {
      const res = await addNews(values);
      if (!(res.statusText == "")) {
        setMessage("Error! Unable to update news, try gain");
        setType("error");
      }
    } else {
      const res = await updatNews(values);
      if (!(res.statusText == "")) {
        setMessage("Error! Unable to update news, try again");
        setType("error");
      } else {
        setMessage("News Updated Successfully!");
      }
    }
    setLoading(false);
    setOpenSnackbar(true);
    setTimeout(() => {
      setOpenSnackbar(false);
      window.location.reload(false);
    }, 3000);
  };

  const handleClearIconClick = () => {
    setEditMode(true);
  };

  return (
    <div className={classes.root}>
      <Formik
        initialValues={{
          title:  "",
          detail:  "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.title) {
            errors.title = "title is required";
          }
          if (!newsImage) {
            errors.newsImage = "image is required";
          }
          if (!values.detail) {
            errors.detail = "description is required";
          }

          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          handleSubmitClick(values);
          // setTimeout(() => {
          //   alert(JSON.stringify(values, null, 2));
          //   setSubmitting(false);
          // }, 4000);
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleSubmit,
          handleReset,
        }) => (
          <Grid container spacing={3} className={classes.gridContainer}>
            <Grid item xs={12} sm={3}>
              <input
                // name="newsImage"
                className={classes.imageInput}
                accept="image/*"
                type="file"
                id="contained-button-file"
                onChange={handleImageChange}
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
              <br />
              { data && (
                <>
                  <img src={newsImage} className={classes.newsImage} />
                  <DeleteIcon className={classes.imageRemove} onClick={handleRemoveImage} />
                </>
              )}
              <FormError errorMessage={errors.newsImage} />
            </Grid>
            <Grid item xs={12} sm>
              <Grid container direction="column">
                <Grid item>
                  <form noValidate autoComplete="off">
                    <Typography variant="h6">Title</Typography>
                    <TextField
                      name="title"
                      id="standard-basic"
                      value={values.title}
                      onChange={handleChange}
                      style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                    />
                    <FormError
                      errorMessage={
                        errors.title && touched.title && errors.title
                      }
                    />
                    <Typography variant="h6">Description</Typography>
                    <TextField
                      name="detail"
                      id="outlined-multiline-static"
                      placeholder="add news description here"
                      value={values.detail}
                      onChange={handleChange}
                      multiline
                      rows={4}
                      className={classes.multilineTextField}
                      style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                    />
                    <FormError
                      errorMessage={
                        errors.detail && touched.detail && errors.detail
                      }
                    />
                    <div className={classes.buttonContainer}>
                      <Button
                        variant="contained"
                        disabled={loading}
                        className={classes.cancelButton}
                        onClick={handleReset}
                        //  handleCancelClick(values)}
                      >
                        cancel
                      </Button>
                      <span className={classes.submitButtonWrapper}>
                        <Button
                          variant="contained"
                          className={classes.submitButton}
                          disabled={loading}
                          onClick={handleSubmit}
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
        )}
      </Formik>
      <SnackBar openSnackbar={openSnackbar} message={message} type={type} />
    </div>
  );
};

export default NewsForm;
