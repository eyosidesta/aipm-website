import React from "react";
import {
  Grid,
  Typography,
  makeStyles,
  Icon,
  Button,
  useTheme,
  useMediaQuery,
  TextField,
} from "@material-ui/core";
import { BACKGROUND_COLOR } from "../../../utils/constants/colors";
import TitleWithIcon from "../Shared/TitleWithIcon";

const useStyles = makeStyles((theme) => ({
  itemDetails: {
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
  image: {
    width: 100,
    height: 100,
  },
}));

const AdminListItemDetail = ({ data, isIconUp, setIsIconUp, setEditMode }) => {
  const classes = useStyles();

  const theme = useTheme();
  const greaterThanExtremeSmall = useMediaQuery(theme.breakpoints.up("sm"));
  const greaterThanSmall = useMediaQuery(theme.breakpoints.up("md"));
  const greaterThanMedium = useMediaQuery(theme.breakpoints.up("lg"));
  const handleEditClick = () => {
    // setEditMode(false);
  };
  return (
    <div>
      <Grid container className={classes.itemDetails}>
        <Grid item xs={12} sm>
          <Grid container direction="column">
            <Grid item>
              <Typography variant="h5">{data.fullName}</Typography>
            </Grid>
            <Grid item>
              <Typography variant="caption">{data.email}</Typography>
            </Grid>
            <div>
              <Grid item>
                <Typography variant="h6">{data.role}</Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2">{data.aipmService}</Typography>
              </Grid>
            </div>
          </Grid>
        </Grid>
        <Grid item xs={6} sm>
          <img src={data.imageUrl} className={classes.image} />
        </Grid>
        <Grid item onClick={handleEditClick}>
          {/* <Icon>edit</Icon> */}
        </Grid>
      </Grid>
      <Grid
        container
        style={{
          justifyContent: "right",
          paddingRight: "10%",
          marginBottom: 10,
        }}
      >
        <TitleWithIcon
          title="send Chat"
          isIconUp={isIconUp}
          setIsIconUp={setIsIconUp}
        />
      </Grid>
      {isIconUp && (
        <div className={classes.chatBoxContainer}>
          <TextField
            id="outlined-multiline-static"
            placeholder={"send chat for " + data.fullName}
            //   value={credentials.aipmService}
            //   onChange={handleServiceChange}
            multiline
            rows={4}
            style={{
              minWidth: greaterThanMedium
                ? 600
                : greaterThanSmall
                ? 500
                : greaterThanExtremeSmall
                ? 350
                : 200,
              backgroundColor: BACKGROUND_COLOR,
              border: "solid",
            }}
          />
          <Button>Send Chat</Button>
        </div>
      )}
    </div>
  );
};

export default AdminListItemDetail;
