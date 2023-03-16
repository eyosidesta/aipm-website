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
  MenuItem,
  CircularProgress,
} from "@material-ui/core";
import { green } from "@material-ui/core/colors";
import {
  DEEP_BLUE_COLOR,
  WHITE_COLOR,
  BACKGROUND_COLOR,
} from "../../../utils/constants/colors";
import { addAdmin } from "../../../utils/ApiService/admins.api";
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
    // top: '100%',
    // right: '32%',
    marginTop: 2,
    // paddingLeft: 10,
    // marginRight: "100%",
  },
}));

const AdminForm = () => {
  const classes = useStyles();
  const [openSnackbar, setOpenSnackbar] = useState(false)
  const [type, setType] = useState('success');
  const [message, setMessage] = useState("Admin Added Successfully")
  const [loading, setLoading] = useState(false);
  const [credentials, setCredentials] = useState({
    fullName: "",
    email: "",
    role: "",
    gender: "",
    staffLocation: "",
    aipmService: "",
  });

  const theme = useTheme();
  const greaterThanExtremeSmall = useMediaQuery(theme.breakpoints.up("sm"));

  const handleAdminRoleChange = (event) => {
    let updateRole = { role: event.target.value };
    setCredentials((credentials) => ({
      ...credentials,
      ...updateRole,
    }));
  };

  const handleFullNameChange = (event) => {
    let updateFullName = { fullName: event.target.value };
    setCredentials((credentials) => ({
      ...credentials,
      ...updateFullName,
    }));
  };
  const handleEmailChange = (event) => {
    let updateEmail = { email: event.target.value };
    setCredentials((credentials) => ({
      ...credentials,
      ...updateEmail,
    }));
  };
  const handleGenderChange = (event) => {
    let updateGender = { gender: event.target.value };
    setCredentials((credentials) => ({ ...credentials, ...updateGender }));
  };
  const handleStaffLocationChange = (event) => {
    let updateStaffLocation = { staffLocation: event.target.value };
    setCredentials((credentials) => ({
      ...credentials,
      ...updateStaffLocation,
    }));
  };
  const handleServiceChange = (event) => {
    let updateAipmService = { aipmService: event.target.value };
    setCredentials((credentials) => ({
      ...credentials,
      ...updateAipmService,
    }));
  };

  const handleSubmitClick = async () => {
    setLoading(true);
    const res = await addAdmin(credentials);
    if(!(res.statusText == "")) {
      setMessage("Error! Unable to add new Admin, try again")
      setType("error")
    }
    setLoading(false);
    setOpenSnackbar(true);
    setTimeout(() => {
      setOpenSnackbar(false);
      handleCancelClick();
    }, 3000);
  };
  
  const handleCancelClick = () => {
    // let cancelCredentials = {fullName: }
    setCredentials(() => ({
      fullName: "",
      email: "",
      role: "",
      gender: "",
      staffLocation: "",
      aipmService: ""
    }
    ))
  }
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
                    value={credentials.fullName}
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  />
                ) : (
                  <TextField
                    id="standard-basic"
                    error
                    helperText="full name is required"
                    value={credentials.fullName}
                    onChange={handleFullNameChange}
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  />
                )}
                <Typography variant="h6">Email</Typography>
                <TextField
                  id="standard-basic"
                  value={credentials.email}
                  onChange={handleEmailChange}
                  style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                />
                <Typography variant="h6">Role</Typography>
                <div>
                  <FormControl
                    style={{ minWidth: greaterThanExtremeSmall ? 300 : 200 }}
                  >
                    <InputLabel id="demo-simple-select-label-role">
                      Role
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label-role"
                      id="demo-simple-select-role"
                      value={credentials.role}
                      onChange={handleAdminRoleChange}
                    >
                      <MenuItem value="Viewer">Viewer</MenuItem>
                      <MenuItem value="Admin">Admin</MenuItem>
                      <MenuItem value="Super Admin">Super Admin</MenuItem>
                    </Select>
                  </FormControl>
                </div>
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
                      value={credentials.gender}
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
                    <InputLabel id="demo-simple-select-label-gender">
                      staff
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label-gender"
                      id="demo-simple-select-gender"
                      value={credentials.staffLocation}
                      onChange={handleStaffLocationChange}
                    >
                      <MenuItem value="Male">Ethiopia</MenuItem>
                      <MenuItem value="Female">USA</MenuItem>
                    </Select>
                  </FormControl>
                </div>
                <Typography variant="h6">AIPM Service</Typography>
                <TextField
                  id="outlined-multiline-static"
                  placeholder="ex. AIPM Ethiopia board member"
                  value={credentials.aipmService}
                  onChange={handleServiceChange}
                  multiline
                  rows={4}
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
      </Grid>
      <SnackBar openSnackbar={openSnackbar} message={message} type={type} />
    </div>
  );
};

export default AdminForm;
