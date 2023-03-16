import React, { useState } from "react";
import {
  makeStyles,
} from "@material-ui/core";
import {
  WHITE_COLOR,
  DEEP_BLUE_COLOR,
} from "../../../utils/constants/colors";
import TestimonyForm from "./TestimonyForm";
import TestimonyListItemDetail from "./TestimonyListItemDetail";

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

const TestimonyListItem = ({ data }) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(true);

  return (
    <div className={classes.root}>
      {editMode ? (
          <TestimonyListItemDetail data={data}
          setEditMode={setEditMode} />
      ) : (
        <TestimonyForm data={data} setEditMode={setEditMode}/>
      )}
    </div>
  );
};

export default TestimonyListItem;
