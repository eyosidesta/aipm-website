import React, { useState } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import {
  WHITE_COLOR,
  DEEP_BLUE_COLOR,
} from "../../../utils/constants/colors";
import AdminListItemDetail from "./AdminListItemDetail";
import EditAdmin from "./EditAdmin";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: WHITE_COLOR,
    border: "solid",
    borderRadius: 5,
    color: DEEP_BLUE_COLOR,
    marginBottom: 10,
  },

}));

const AdminListItem = ({ data }) => {
  const classes = useStyles();
  const [isIconUp, setIsIconUp] = useState(false);
  const [editMode, setEditMode] = useState(true);

  return (
    <div className={classes.root}>
      {editMode ? (
          <AdminListItemDetail data={data}
          isIconUp={isIconUp}
          setIsIconUp={setIsIconUp}
          setEditMode={setEditMode} />
      ) : (
        <EditAdmin />
      )}
    </div>
  );
};

export default AdminListItem;
