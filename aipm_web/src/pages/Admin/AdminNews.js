import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import TitleWithIcon from "../../components/Admin/Shared/TitleWithIcon";
import NewsForm from "../../components/Admin/AIPMNews/NewsForm"
import NewsList from "../../components/Admin/AIPMNews/NewsList"

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
const AdminNews = () => {
  const classes = useStyles();
  const [isIconUp, setIsIconUp] = useState(false);
  return (
    <div className={classes.root}>
      <TitleWithIcon
        title="Add News"
        isIconUp={isIconUp}
        setIsIconUp={setIsIconUp}
      />
      {isIconUp && 
      <div className={classes.formContainer}>
        <NewsForm data={false}/>
        </div>}
        <div className={classes.adminListContainer}>
          <NewsList />
        </div>
    </div>
  );
};

export default AdminNews;
