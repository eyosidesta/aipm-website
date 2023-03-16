import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import TitleWithIcon from "../../components/Admin/Shared/TitleWithIcon";
import TestimonyForm from "../../components/Admin/AIPMTestimony/TestimonyForm"
import TestimonyList from "../../components/Admin/AIPMTestimony/TestimonyList"

const useStyles = makeStyles((theme) => ({
  root: {
    color: DEEP_BLUE_COLOR,
  },
  formContainer: {
    marginTop: 10
  },
  adminListContainer: {
    marginTop: 20
  }
}));
const AdminTestimony = () => {
  const classes = useStyles();
  const [isIconUp, setIsIconUp] = useState(false);
  return (
    <div className={classes.root}>
      <TitleWithIcon
        title="Testimony"
        isIconUp={isIconUp}
        setIsIconUp={setIsIconUp}
      />
      {isIconUp && 
      <div className={classes.formContainer}>
        <TestimonyForm data={false}/>
        </div>}
        <div className={classes.adminListContainer}>
          <TestimonyList />
        </div>
    </div>
  );
};

export default AdminTestimony;
