import React from "react";
import {
  Grid,
  Typography,
  IconButton,
  Dialog,
  makeStyles,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import MuiDialogActions from "@material-ui/core/DialogActions";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const useStyles =  makeStyles((theme) => ({
  contentContainer: {
    width: "98%",
    marginBottom: 10
  }
}));

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <Typography variant="subtitle1">{children}</Typography>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);

const Modals = ({modalData,open, setOpen }) => {
  const classes = useStyles();
  
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div style={{maxWidth: 900}}>
      <Dialog aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {modalData.name}   {modalData.specialThing && ` | ${modalData.specialThing}`} {modalData.servicePlace && ` | ${modalData.servicePlace}`}
        </DialogTitle>
        <DialogContent>
          <div>
            <Grid container className={classes.contentContainer}>
              <Grid item sm>
                <Typography variant="caption" style={{ width: "90%" }}>
                  {modalData.descriptionOne && modalData.descriptionOne}
                </Typography>
              </Grid>
              <Grid item>
                <img src={modalData.imageUrl} style={{ width: 120, height: 130 }} />
              </Grid>
            </Grid>
            <Grid container item>
              <Grid item style={{width: "98%"}}>
                <Typography variant="caption">
                  {modalData.descriptionTwo && modalData.descriptionTwo}
                </Typography>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
        {/*
          <Button autoFocus onClick={handleClose} color="primary">
            Save Changes
          </Button> */}
      </Dialog>
    </div>
  );
};

export default Modals;
