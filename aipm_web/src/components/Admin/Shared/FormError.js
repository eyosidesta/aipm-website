import React from "react";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    error: {
        color: "red",
    }
}))
const FormError = ({errorMessage}) => {
    const classes = useStyles();
    return (
        <div className={classes.error}>{errorMessage}</div>
    )
}

export default FormError;