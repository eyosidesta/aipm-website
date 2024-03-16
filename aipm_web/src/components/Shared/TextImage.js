import React, { useState } from "react";
import { Grid, makeStyles } from "@material-ui/core";
import ImageFirst from "./TextImageComponents/ImageFirst";
import TextFirst from "./TextImageComponents/TextFirst";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const TextImage = ({ data, nextVal, styles }) => {
  const [fixed, setFixed] = useState(false);
  const classes = useStyles();
  return (
    <div>
      <Grid className={classes.root}>
        {!fixed ? (
          <>
            {nextVal % 2 === 0 ? (
              <TextFirst data={data} styles={styles} />
            ) : (
              <ImageFirst data={data} styles={styles} />
            )}
          </>
        ) : (
          <ImageFirst data={data} />
        )}
      </Grid>
    </div>
  );
};

export default TextImage;
