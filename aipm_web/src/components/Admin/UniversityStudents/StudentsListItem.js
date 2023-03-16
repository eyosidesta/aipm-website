import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { WHITE_COLOR, DEEP_BLUE_COLOR } from "../../../utils/constants/colors";
import StudentsListItemDetail from "./StudentsListItemDetail";
import StudentsForm from "./StudentsForm";

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

const StudentsListItem = ({ data }) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(true);

  return (
    <div className={classes.root}>
      {editMode ? (
        <StudentsListItemDetail data={data} setEditMode={setEditMode} />
      ) : (
        <StudentsForm data={data} setEditMode={setEditMode} />
      )}
    </div>
  );
};

export default StudentsListItem;
