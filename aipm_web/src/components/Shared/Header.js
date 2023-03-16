import React from "react";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import { makeStyles, Grid, Avatar, Typography } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import aipm_logo from "../../assets/AIPM_LOGO.png";
import GridAPI from "./GridAPI";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: "2%",
    paddingTop: "2%",
    marginBottom: 10,
  },
  paper: {
    color: DEEP_BLUE_COLOR,
  },
  lists: {
    paddingLeft: "10%",
  },
  alignCenter: {
    alignItems: "center",
  },
}));
function Header() {
  const classes = useStyles();

  const navigate = useNavigate();

  const handleNavigation = (route) => {
    navigate(`/${route}`, {replace: true}, [navigate])
  };
  const handleToggle = (listItem) => {
    !listItem.menu && navigate(`/${listItem.link}`, {replace: true}, [navigate]);
  };
  const menuItemsClicked = (route) => {
    handleNavigation(route);
  };

  const handleHomeNavigation = () => {
    navigate('/', {replace: true}, [navigate]);
  }

  const listItems = [
    {
      id: 1,
      text: "Ministries",
      defaultIcon: "fa fa-caret-down textColor",
      newIcon: "fa fa-caret-up textColor",
      menu: [
        { name: "Prayer Movement", onMenuClick: () => menuItemsClicked("prayer-movement") },
        { name: "Mission Movement", onMenuClick: () => menuItemsClicked("mission-movement") },
        { name: "University Students Movement", onMenuClick: () => menuItemsClicked("university-students-movement") },
      ],
      variant: "body2",
      iconSize: "small",
    },
    {
      id: 2,
      text: "Testimonies",
      defaultIcon: false,
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
      link: "testimonies",
    },
    {
      id: 3,
      text: "News",
      defaultIcon: false,
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
      link: "news",
    },
    {
      id: 4,
      text: "Resources",
      defaultIcon: false,
      newIcon: "fa fa-caret-up textColor",
      variant: "body2",
      iconSize: "small",
      link: "resources",
    },
    {
      id: 5,
      text: "Support",
      defaultIcon: "fa fa-caret-down textColor",
      newIcon: "fa fa-caret-up textColor",
      menu: [
        {
          name: "For Ethiopians",
          onMenuClick: () => menuItemsClicked("ethio-support"),
        },
        {
          name: "For Foreigners",
          onMenuClick: () => menuItemsClicked("foreign-support"),
        },
      ],
      variant: "body2",
      iconSize: "small",
    },
    {
      id: 6,
      text: "Projects",
      defaultIcon: "fa fa-caret-down textColor",
      newIcon: "fa fa-caret-up textColor",
      menu: [
        {
          name: "Birhan Building",
          onMenuClick: () => menuItemsClicked("birhan-building-project"),
        },
        {
          name: "Cross Project",
          onMenuClick: () => menuItemsClicked("cross-project"),
        },
        {
          name: "others",
          onMenuClick: () => menuItemsClicked("others-Support"),
        },
      ],
      variant: "body2",
      iconSize: "small",
    },
    {
      id: 7,
      text: "About Us",
      defaultIcon: "fa fa-caret-down textColor",
      newIcon: "fa fa-caret-up textColor",
      menu: [
        { name: "who we are", onMenuClick: () => menuItemsClicked("who-we-are") },
        { name: "contactus", onMenuClick: () => menuItemsClicked("contact-us") },
        { name: "Statement of Faith", onMenuClick: () => menuItemsClicked("statement-of-faith") },
        { name: "Values", onMenuClick: () => menuItemsClicked("values") },
        { name: "Vission and Mission", onMenuClick: () => menuItemsClicked("vission-and-mission") },
        { name: "staff and Board Members", onMenuClick: () => menuItemsClicked("staff-board-members") },
      ],
      variant: "body2",
      iconSize: "small",
    },
  ];

  return (
    <Grid className={classes.root} container>
      <Grid
        container
        justifyContent="flex-start"
        spacing={2}
        style={{ margin: 0, width: "100%" }}
      >
        {/* <Grid > */}
        <Grid item style={{cursor: "pointer"}} onClick={handleHomeNavigation}>
          <Avatar alt="AIPM" src={aipm_logo} />
        </Grid>
          <Grid item style={{cursor: "pointer"}} onClick={handleHomeNavigation}>
            <Typography variant="body2" className={classes.paper}>
              Ambaricho International
            </Typography>
            <Typography variant="body2" className={classes.paper}>
              and Prayer Movement
            </Typography>
          </Grid>
          {/* </Grid> */}
        <Grid container item sm xs={12}>
          <Grid
            container
            direction="row"
            spacing={4}
            alignItems="center"
            className={classes.lists}
            style={{ margin: 0, width: "100%" }}
          >
            {listItems.map((item, index) => {
              return (
                <GridAPI
                  key={item.id}
                  listItem={item}
                  handleToggle={() => handleToggle(item)}
                />
              );
            })}
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
export default Header;
