import React from "react";
import { Grid, makeStyles, Typography } from "@material-ui/core";
import Cards from "../../Shared/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const CardContainer = ({testimonies, toggleModal}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        {testimonies.map((item, index) => {
          return (
            <Grid item xs={12} sm={6} md={4} lg={3} key={index} onClick={() => toggleModal(item.id)}>
              <Cards key={index} data={item} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
export default CardContainer;
