import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
import { WHITE_COLOR, DEEP_BLUE_COLOR } from "../../../utils/constants/colors";
import NewsListItemDetail from "./NewsListItemDetail";
import NewsForm from "./NewsForm";

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

const NewsListItem = ({ data }) => {
  const classes = useStyles();
  const [editMode, setEditMode] = useState(true);

  return (
    <div className={classes.root}>
      {editMode ? (
        <NewsListItemDetail data={data} setEditMode={setEditMode} />
      ) : (
        <NewsForm data={data} setEditMode={setEditMode} />
      )}
    </div>
  );
};

export default NewsListItem;
