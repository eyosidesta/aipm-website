import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import TitleWithIcon from "../../components/Admin/Shared/TitleWithIcon";
import StudentsForm from "../../components/Admin/UniversityStudents/StudentsForm"
import StudentsList from "../../components/Admin/UniversityStudents/StudentsList"

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
const AdminUniversityStudents = () => {
  const classes = useStyles();
  const [isIconUp, setIsIconUp] = useState(false);
  return (
    <div className={classes.root}>
      <TitleWithIcon
        title="Students"
        isIconUp={isIconUp}
        setIsIconUp={setIsIconUp}
      />
      {isIconUp && 
      <div className={classes.formContainer}>
        <StudentsForm data={false}/>
        </div>}
        <div className={classes.adminListContainer}>
          <StudentsList />
        </div>
    </div>
  );
};

export default AdminUniversityStudents;
