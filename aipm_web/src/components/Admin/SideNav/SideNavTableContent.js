import React from "react";
import {
  TableRow,
  TableCell,
  Typograhy,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom"
import {
  DEEP_BLUE_COLOR,
  WHITE_COLOR,
} from "../../../utils/constants/colors";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tableCell: {
    textAlign: "center",
    cursor: "pointer",
  },
}));

const SideNavTableContent = ({ data }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const location = useLocation();
  
  const handleClick = (item) => {
    navigate(`${item.url}`, {replace: true}, [navigate]);
  };
  return (
    <TableRow>
      <TableCell
        className={classes.tableCell}
        style={{
          backgroundColor:
            data.url === location.pathname ? DEEP_BLUE_COLOR : WHITE_COLOR,
          color: data.url === location.pathname ? WHITE_COLOR : DEEP_BLUE_COLOR,
        }}
        onClick={() => handleClick(data)}
      >
        <Typography variant="h6">
          {data.title}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default SideNavTableContent;
