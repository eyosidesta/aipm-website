import React from "react";
import {
  Divider,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { FOOTER_COLOR, FOOTER_TEXT_COLOR } from "../../utils/constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: FOOTER_COLOR,
    marginTop: 15,
  },
  secondRoot: {
    minHeight: "25vh",
    padding: 30,
    color: FOOTER_TEXT_COLOR,
  },
  footerTitle: {
    textAlign: "center",
    marginBottom: 17,
    marginTop: 20,
  },
  footerDetailContainer: {
    textAlign: "center",
  },
  footerDetail: {
    alignItems: "center",
    paddingLeft: 100,
  },
  insideFooterDetail: {
    marginBottom: 15,
  },
  divider: {
    backgroundColor: FOOTER_TEXT_COLOR,
  },
  copyright: {
    textAlign: "center",
    padding: 10,
    color: FOOTER_TEXT_COLOR
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.secondRoot}>
        <Grid container>
          <Grid container>
            <Grid item xs={12} sm container>
              <Grid item container direction="column">
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.footerTitle}
                  >
                    <b>About AIPM</b>
                  </Typography>
                  <div className={classes.insideFooterDetail}>
                  <Typography variant="body2">
                    This movement got its name, Ambaricho International Prayer
                    and Missions Movement (AIPM) because of its focus on prayer
                    for revival and renewal of existing churches
                  </Typography>
                  </div>
                  <Typography variant="body2">
                    This movement got its name, Ambaricho International Prayer
                    and Missions Movement (AIPM) because of its focus on prayer
                    for revival and renewal of existing churches
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item container direction="column">
                <Grid item>
                  <Typography variant="h6" className={classes.footerTitle}>
                    <b>Contact Us</b>
                  </Typography>
                  <div className={classes.footerDetail}>
                    <div className={classes.insideFooterDetail}>
                      <Typography variant="body2">Phone: +251934784054</Typography>
                      <Typography variant="body2">Email: destalangena7@gmail.com</Typography>
                      <Typography variant="body2">Address: Durame, Ethiopia</Typography>
                    </div>
                    <div>
                      <Typography variant="body2">Aipm USA</Typography>
                      <Typography variant="body2">Phone: +251934784054</Typography>
                      <Typography variant="body2">Email: destalangena7@gmail.com</Typography>
                      <Typography variant="body2">
                        Address: 320 W. 4th St. Mishawaka, IN 46544
                      </Typography>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} sm container>
              <Grid item container direction="column">
                <Grid item>
                  <Typography
                    variant="h6"
                    className={classes.footerTitle}
                  >
                    <b>Important Link</b>
                  </Typography>
                  <div className={classes.footerDetail}>
                    <Typography variant="body2">about AIPM: who we are</Typography>
                    <Typography variant="body2">AIPM USA: aipmusa</Typography>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
      <Divider className={classes.divider} />
      <Typography variant="body2" className={classes.copyright}><em>@ Ambaricho International Prayer and Mission Movement Ministry. All rights reserved
        2022</em>
      </Typography>
    </div>
  );
};

export default Footer;
