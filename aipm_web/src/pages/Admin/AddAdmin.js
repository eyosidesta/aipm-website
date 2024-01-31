import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { DEEP_BLUE_COLOR, WHITE_COLOR } from "../../utils/constants/colors";
import AdminForm from "../../components/Admin/AddAdmin/AdminForm";
import AdminList from "../../components/Admin/AddAdmin/AdminList";
import TitleWithIcon from "../../components/Admin/Shared/TitleWithIcon";

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

const AddAdmin = () => {
  const classes = useStyles();
  const [isIconUp, setIsIconUp] = useState(false);
  return (
    <div className={classes.root}>
      <TitleWithIcon
        title="Add Admin"
        isIconUp={isIconUp}
        setIsIconUp={setIsIconUp}
      />
      {isIconUp && 
      <div className={classes.formContainer}>
        <AdminForm />
        </div>}
        <div className={classes.adminListContainer}>
          <AdminList />
        </div>
    </div>
  );
};

export default AddAdmin;
