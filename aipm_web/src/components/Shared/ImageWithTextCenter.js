import React from "react";
import { makeStyles, Typography, Box } from "@material-ui/core";
import { WHITE_COLOR } from "../../utils/constants/colors";

const useStyles = makeStyles((theme) => ({
  image: {
    maxHeight: `75vh`,
    width: "100%",
    marginBottom: 30,
  },
  imageContainer: {
    position: "relative",
    color: WHITE_COLOR,
  },
  aipmText: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    height: "0%",
    margin: "auto",
    top: 0,
    left: 0,
    bottom: 190,
    right: 0,
  },
}));

const ImageWithTextCenter = ({ styles }) => {
  // const three = "75"
  const classes = useStyles();
  return (
    <div className={classes.imageContainer}>
      <div><img
        style={{
          // borderRadius: styles.borderRadius,
          // borderBottomLeftRadius: styles.borderRadius,
          maxHeight: `${styles.height}vh`,
          paddingLeft: `${(100 - styles.width) / 2}%`,
          width: `${styles.width}%`,
        }}
        src={styles.backgroundImage}
        alt="aipm image"
      />
      </div>
      <div className={classes.aipmText} style={{color: styles.detail.color ? styles.detail.color : WHITE_COLOR}}>
        <Typography variant={styles.detail.titleFont}>{styles.title}</Typography>
        <Typography variant={styles.detail.descriptionFont}>{styles.detail.description}</Typography>
      </div>
    </div>
  );
};

export default ImageWithTextCenter;
