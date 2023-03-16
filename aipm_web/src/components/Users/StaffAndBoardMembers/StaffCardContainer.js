import React from "react";
import { Grid, makeStyles } from "@material-ui/core";
import Cards from "../../Shared/Card";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    justifyContent: "center"
  },
}));
const StaffCardContainer = ({ staffMembers, onMemberClick }) => {
  const classes = useStyles();
  return (
    <Grid container className={classes.root} spacing={3}>
      {staffMembers.map((member, index) => {
        return (<Grid item xs={12} sm={6} md={4} lg={3} key={index} onClick={() => onMemberClick(member.id)}>
          <Cards data={member} />
        </Grid>);
      })}
    </Grid>
  );
};

export default StaffCardContainer;
