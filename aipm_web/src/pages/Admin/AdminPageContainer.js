import React from "react";
import {
  Grid,
  makeStyles,
} from "@material-ui/core";
import { Routes, Route } from "react-router-dom";
import AddAdmin from "./AddAdmin";
import AdminNews from "./AdminNews";
import AdminStaff from "./AdminStaff";
import AdminTestimony from "./AdminTestimony";
import AdminUniversityStudents from "./AdminUniversityStudents";
import DashBoard from "./DashBoard";
import MyProfile from "./MyProfile";
import SideNav from "./SideNav";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: 40,
    paddintBottom: 40,
    marginLeft: 40,
    marginRight: 40,
  },
}));
const AdminPageContainer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <SideNav />
        <Grid item xs={12} sm={12} md>
          <Routes>
            <Route path="/" exact element={<DashBoard />} />
            <Route path="/add-admin" exact element={<AddAdmin />} />
            <Route path="/news" exact element={<AdminNews />} />
            <Route path="/testimony" exact element={<AdminTestimony />} />
            <Route
              path="/university-students"
              exact
              element={<AdminUniversityStudents />}
            />
            <Route path="/aipm-staffs" exact element={<AdminStaff />} />
            <Route path="/my-profile" exact element={<MyProfile />} />
          </Routes>
        </Grid>
      </Grid>
    </div>
  );
};

export default AdminPageContainer;
