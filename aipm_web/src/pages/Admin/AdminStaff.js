import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import TitleWithIcon from "../../components/Admin/Shared/TitleWithIcon";
import StaffForm from "../../components/Admin/AIPMStaff/StaffForm"
import StaffList from "../../components/Admin/AIPMStaff/StaffList"

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
const AdminStaff = () => {
  const classes = useStyles();
  const [isIconUp, setIsIconUp] = useState(false);
  return (
    <div className={classes.root}>
      <TitleWithIcon
        title="Add Staffs"
        isIconUp={isIconUp}
        setIsIconUp={setIsIconUp}
      />
      {isIconUp && 
      <div className={classes.formContainer}>
        <StaffForm data={false}/>
        </div>}
        <div className={classes.adminListContainer}>
          <StaffList />
        </div>
    </div>
  );
};

export default AdminStaff;
