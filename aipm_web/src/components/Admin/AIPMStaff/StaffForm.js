import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Button,
  Typography,
  TextField,
  useMediaQuery,
  useTheme,
  FormControl,
  InputLabel,
  Select,
  Icon,
  MenuItem,
  CircularProgress,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import {
  DEEP_BLUE_COLOR,
  WHITE_COLOR,
  BACKGROUND_COLOR,
} from "../../../utils/constants/colors";
import {
  addStaffmember,
  updatStaffMember,
} from "../../../utils/ApiService/staff.members";
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

const StaffForm = ({ data, setEditMode }) => {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [type, setType] = useState("success");
  const [message, setMessage] = useState("Staff Member Added Successfully!");
  const [loading, setLoading] = useState(false);
  const [staffInfo, setStaffInfo] = useState(
    data
      ? {
          id: data.id,
          fullName: data.fullName,
          gender: data.gender,
          staffLocation: data.staffLocation,
          aipmService: data.aipmService,
          whoIsHe: data.whoIsHe,
          responsibility: data.responsibility,
          passion: data.passion,
        }
      : {
          fullName: "",
          gender: "",
          staffLocation: "",
          aipmService: "",
          whoIsHe: "",
          responsibility: "",
          passion: "",
        }
  );

  const theme = useTheme();
  const greaterThanExtremeSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const handleFullNameChange = (event) => {
    let updateFullName = { fullName: event.target.value };
    setStaffInfo((staffInfo) => ({
      ...staffInfo,
      ...updateFullName,
    }));
  };
  const handleGenderChange = (event) => {
    let updateGender = { gender: event.target.value };
    setStaffInfo((staffInfo) => ({ ...staffInfo, ...updateGender }));
  };
  const handleStaffLocationChange = (event) => {
    let updateStaffLocation = { staffLocation: event.target.value };
    setStaffInfo((staffInfo) => ({
      ...staffInfo,
      ...updateStaffLocation,
    }));
  };
  const handleServiceChange = (event) => {
    let updateAipmService = { aipmService: event.target.value };
    setStaffInfo((staffInfo) => ({
      ...staffInfo,
      ...updateAipmService,
    }));
  };
  const handleAboutChange = (event) => {
    let updateAboutPerson = { whoIsHe: event.target.value };
    setStaffInfo((staffInfo) => ({
      ...staffInfo,
      ...updateAboutPerson,
    }));
  };
  const handleResponsibilityChange = (event) => {
    let updateResponsibility = { responsibility: event.target.value };
    setStaffInfo((staffInfo) => ({
      ...staffInfo,
      ...updateResponsibility,
    }));
  };

  const handlePassionChange = (event) => {
    let updatePassion = { passion: event.target.value };
    setStaffInfo((staffInfo) => ({
      ...staffInfo,
      ...updatePassion,
    }));
  };

  const handleSubmitClick = async () => {
    setLoading(true);
    if (!data) {
      const res = await addStaffmember(staffInfo);
      if (!(res.statusText == "")) {
        setMessage("Error! Unable to add staff member");
        setType("error");
      }
    } else {
      const res = await updatStaffMember(staffInfo);
      if (!(res.statusText == "")) {
        setMessage("Error! Unable to update staff member info, try again");
        setType("error");
      } else {
        setMessage("Staff Member Updated Successfully!")
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
    setStaffInfo(() => ({
      fullName: "",
      gender: "",
      staffLocation: "",
      aipmService: "",
      responsibility: "",
      whoIsHe: "",
      passion: "",
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
                    value={staffInfo.fullName}
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  />
                ) : (
                  <TextField
                    id="standard-basic"
                    error
                    helperText="full name is required"
                    value={staffInfo.fullName}
                    onChange={handleFullNameChange}
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  />
                )}
                <Typography variant="h6">Gender</Typography>
                <div>
                  <FormControl
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  >
                    <InputLabel id="demo-simple-select-label-gender">
                      Gender
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label-gender"
                      id="demo-simple-select-gender"
                      value={staffInfo.gender}
                      onChange={handleGenderChange}
                    >
                      <MenuItem value="Male">Male</MenuItem>
                      <MenuItem value="Female">Female</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Typography variant="h6">Staff Location</Typography>
                <div>
                  <FormControl
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  >
                    <InputLabel id="demo-simple-select-label-staff">
                      staff
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label-staff"
                      id="demo-simple-select-staff"
                      value={staffInfo.staffLocation}
                      onChange={handleStaffLocationChange}
                    >
                      <MenuItem value="Ethiopia">Ethiopia</MenuItem>
                      <MenuItem value="USA">USA</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Typography variant="h6">AIPM Service</Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="ex. AIPM Ethiopia board member"
                  value={staffInfo.aipmService}
                  onChange={handleServiceChange}
                  multiline
                  rows={4}
                  className={classes.multilineTextField}
                  style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                />
                <Typography variant="h6">Write About this person</Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="describe this guy in short"
                  value={staffInfo.whoIsHe}
                  onChange={handleAboutChange}
                  multiline
                  rows={4}
                  className={classes.multilineTextField}
                  style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                />
                <Typography variant="h6">AIPM Responsibility</Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="describe what this guy is doing for aipm"
                  value={staffInfo.responsibility}
                  onChange={handleResponsibilityChange}
                  multiline
                  rows={4}
                  className={classes.multilineTextField}
                  style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                />
                <Typography variant="h6">His/Her Passion</Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="on what thing this guy is more passionate"
                  value={staffInfo.passion}
                  onChange={handlePassionChange}
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

export default StaffForm;
