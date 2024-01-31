import React from "react";
import {makeStyles, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core";
import { CARD_COLOR, DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import contentImage from "../../assets/prayer_image.png";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 200,
        color: DEEP_BLUE_COLOR,
        backgroundColor: CARD_COLOR
    },
    media: {
        height: 150,
        textAlign: "start"
    },
    title: {
        // paddingLeft: -10
    },
    button: {
        textAlign: "end",
        width: "100%",
    }
}));

const Cards = ({data}) => {
    const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={data.imageUrl}
                />
                <CardContent>
                    <Typography variant="h6">{data.name}</Typography>
                    <Typography variant="body2">{data.servicePlace}</Typography>
                    {data.place && <Typography variant="caption">{data.place}</Typography> }
                    <Typography className={classes.button}>{data.action}</Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default Cards;