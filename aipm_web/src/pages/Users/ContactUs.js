import React from "react";
import { makeStyles, Typography, Grid } from "@material-ui/core";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import ContactUsGrid from "../../components/Users/ContactUs/ContactUsGrid";

const useStyles = makeStyles((theme) => ({
  root: {
    color: DEEP_BLUE_COLOR,
  },
  container: {
    maxWidth: "100%",
    margin: "auto",
  },
  contactUs: {
      marginTop: 30,
      marginBottom: 30,
      textAlign: "center",
  }
}));

const ContactUs = () => {
  const classes = useStyles();

  const items = [
    {
      id: 1,
      icon: "fa fa-map-marker",
      title: "Physical Location",
      descriptionOne: "Durame, Ethiopia",
      descriptionTwo: "Addis Ababa, Ethiopia",
    },
    {
      id: 2,
      icon: "fa fa-phone",
      title: "Call Us or use P.O Box",
      descriptionOne: "Phone: 0465541094",
      descriptionTwo: "P.O BOX: 000 Durame",
    },
    {
      id: 3,
      icon: "fa fa-envelope",
      title: "Send us an email",
      descriptionOne: "email: destalangena7@gmail.com",
      descriptionTwo: "website: aipm@gmail.com",
    },
  ];
  return (
    <div className={classes.root}>
        <Typography variant="h3" className={classes.contactUs}>
            Contact Us
        </Typography>
      <Grid container spacing={3} className={classes.container}>
        {items.map((item, index) => {
          return <ContactUsGrid key={index} data={item} />;
        })}
      </Grid>
    </div>
  );
};

export default ContactUs;
