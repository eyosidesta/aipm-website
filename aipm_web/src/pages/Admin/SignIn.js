import React, { useState } from "react";
import {
  Grid,
  makeStyles,
  Avatar,
  Typography,
  Button,
  TextField,
  Checkbox,
  useMediaQuery,
  useTheme,
  CircularProgress,
} from "@material-ui/core";
import { DEEP_BLUE_COLOR, WHITE_COLOR } from "../../utils/constants/colors";
import { signIn } from "../../utils/ApiService/sign.in";
import { signInAction } from "../../store/actions";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import aipm_logo from "../../assets/AIPM_LOGO.png";
import siginImage from "../../assets/adminPageImages/signInImage.png";
import SnackBar from "../../components/Shared/SnackBar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    color: DEEP_BLUE_COLOR,
  },
  container: {
    alignContent: "center",
    marginTop: 100,
  },
  logo: {
    marginBottom: 20,
    width: theme.spacing(10),
    height: theme.spacing(10),
  },
  aipmTitle: {
    textAlign: "center",
    marginBottom: 10,
  },
  aipmDetail: {
    opacity: "50%",
  },
  TextFieldContainer: {
    marginLeft: 30,
    marginTop: 10,
    opacity: "50%",
  },
  TextField: {
    marginTop: -10,
    marginBottom: 5,
  },
  imageContainer: {
    display: "flex",
    justifyContent: "center",
  },
  signInContainer: {
    textAlign: "center",
    marginTop: 30,
    marginBottom: 30,
  },
  signInButton: {
    backgroundColor: DEEP_BLUE_COLOR,
    color: WHITE_COLOR,
    paddingLeft: 40,
    paddingRight: 40,
    textAlign: "center",
  },
  rememberContainer: {
    paddingLeft: 15,
  },
  rememberDetail: {
    marginTop: 4,
    marginRight: 20,
  },
  circularProgress: {
    textAlign: "center",
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [message, setMessage] = useState("Logged In Successful");
  const [type, setType] = useState("success");

  const onEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const onPasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSignIn = async () => {
    setIsLoading(true);
    const credentials = { email: email, password: password };
    const res = await signIn(credentials);
    setIsLoading(false);
    dispatch(signInAction());
    setOpenSnackbar(true);
    setTimeout(() => {
      navigate("/", { replace: true }, [navigate]);
    }, 3000);
  };

  const theme = useTheme();
  const extraSmall = useMediaQuery(theme.breakpoints.down("xs"));

  const onRememberPasswordClicked = () => {
    setChecked(!checked);
  };
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12} sm>
          <Grid container direction="column" className={classes.container}>
            <div className={classes.imageContainer}>
              <Grid item>
                <Avatar alt="AIPM" src={aipm_logo} className={classes.logo} />
              </Grid>
            </div>
            <Grid item className={classes.aipmTitle}>
              <Typography variant="h3">AIPM</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" className={classes.aipmDetail}>
                Ambaricho International Prayer and Mission Movement
              </Typography>
            </Grid>
            <div className={classes.TextFieldContainer}>
              <Grid item>
                <Typography variant="h6">Email</Typography>
              </Grid>
              <Grid item className={classes.TextField}>
                <TextField
                  id="standard-basic"
                  value={email}
                  onChange={onEmailChange}
                />
              </Grid>
              <Grid item>
                <Typography variant="h6">Password</Typography>
              </Grid>
              <Grid item className={classes.TextField}>
                <TextField
                  id="password"
                  type="password"
                  value={password}
                  onChange={onPasswordChange}
                />
              </Grid>
            </div>
            <Grid item className={classes.rememberContainer}>
              <Grid container direction="row">
                <Grid item>
                  <Checkbox
                    checked={checked}
                    onChange={onRememberPasswordClicked}
                    color="primary"
                  />
                </Grid>
                <Grid item className={classes.rememberDetail}>
                  <Button>Remember Passowrd</Button>
                </Grid>
                <Grid item xs={12} sm className={classes.rememberDetail}>
                  <Button>Forgot Password</Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid item className={classes.signInContainer}>
              {isLoading ? (
                <div className={classes.circularProgress}>
                  <CircularProgress />
                </div>
              ) : (
                <Button className={classes.signInButton} onClick={handleSignIn}>
                  Sign In
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <img
            src={siginImage}
            style={{ height: extraSmall ? "50vh" : "100vh" }}
          />
        </Grid>
      </Grid>
      <SnackBar openSnackbar={openSnackbar} message={message} type={type} />
    </div>
  );
};

export default SignIn;
