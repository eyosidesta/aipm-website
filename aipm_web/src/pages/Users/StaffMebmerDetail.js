import React, { useState, useEffect } from "react";
import {
  makeStyles,
  Typography,
  Grid,
  CircularProgress,
  Button,
} from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getStaffMember } from "../../utils/ApiService/staff.members";
import { getStaffMemberAction } from "../../store/actions";
import aberashImage from "../../assets/staff_images/avater.png";
import bekeleImage from "../../assets/staff_images/bekeleImage.png";
import bobImage from "../../assets/staff_images/bobImage.png";
import destaImage from "../../assets/staff_images/destaImage.png";
import endashawImage from "../../assets/staff_images/endeshawImage.png";
import eyosiasImage from "../../assets/staff_images/eyosiasImage.png";
import hollieImage from "../../assets/staff_images/hollieImage.png";
import jeffImage from "../../assets/staff_images/jeffImage.png";
import justinImage from "../../assets/staff_images/jusintImage.png";
import kalebImage from "../../assets/staff_images/kalebImage.jpg";
import larryImage from "../../assets/staff_images/larryImage.png";
import maiImage from "../../assets/staff_images/maiImage.png";
import nancyImage from "../../assets/staff_images/nancyImage.png";
import seteveImage from "../../assets/staff_images/steveImage.png";
import tamiruImage from "../../assets/staff_images/tamiruImageTwo.png";
import tekalignImage from "../../assets/staff_images/tekalignImage.png";
import tesemaImage from "../../assets/staff_images/avater.png";
import zeniImage from "../../assets/staff_images/zeniImage.png";

const useStyles = makeStyles((theme) => ({
  root: {
    color: DEEP_BLUE_COLOR,
  },
  profileContainer: {
    justifyContent: "center",
  },
  profileText: {
    textAlign: "center",
    marginTop: 20,
  },
  detailContainer: {
    width: "90%",
    paddingLeft: "5%",
    paddingRight: "5%",
    marginTop: 70,
  },
  titles: {
    marginBottom: 5,
  },
  minDetailContainer: {
    marginBottom: 30,
  },
  notFoundUser: {
    textAlign: "center",
  },
  circularProgress: {
    textAlign: "center",
  },
}));
const StaffMemberDetail = () => {
  const classes = useStyles();
  const { id } = useParams();

  const [isLoading, setIsLoading] = useState(false);

  const memberState = useSelector((state) => state.staffMember);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/staff-board-members', {replace: true}, [navigate]);
  }

  const items = [
    {
      id: 1,
      name: "Dr. Desta Langena",
      gender: "Male",
      serviceTitle: "AIPM Ethiopia Director",
      place: "Durame, Ethiopia",

      imageUrl: destaImage,
      action: "Read More",

      ethiopianStaff: true,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
            (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
            of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 2,
      name: "Zenebech Oushe",
      gender: "Female",
      serviceTitle: "AIPM Ethiopia Board Member",
      place: "Durame, Ethiopia",

      imageUrl: zeniImage,
      action: "Read More",

      ethiopianStaff: true,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 3,
      name: "Tekalign Daniel",
      gender: "Male",
      serviceTitle: "AIPM Ethiopia Board Member",
      place: "Durame, Ethiopia",

      imageUrl: tekalignImage,
      action: "Read More",

      ethiopianStaff: true,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 4,
      name: "Tamiru Langena",
      gender: "Male",
      serviceTitle: "AIPM Ethiopia Board Member",
      place: "Durame, Ethiopia",

      imageUrl: tamiruImage,
      action: "Read More",

      ethiopianStaff: true,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 5,
      name: "Tesema Tesfaye",
      gender: "Male",
      serviceTitle: "AIPM Ethiopia Board Member",
      place: "Durame, Ethiopia",

      imageUrl: tesemaImage,
      action: "Read More",

      ethiopianStaff: true,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 6,
      name: "Aberash Adore",
      gender: "Female",
      serviceTitle: "AIPM Ethiopia Board Member",
      place: "Durame, Ethiopia",

      imageUrl: aberashImage,
      action: "Read More",

      ethiopianStaff: true,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 7,
      name: "Kaleb Ayele",
      gender: "Male",
      serviceTitle: "AIPM Ethiopia Board Member",
      place: "Addis Ababa, Ethiopia",

      imageUrl: kalebImage,
      action: "Read More",

      ethiopianStaff: true,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 8,
      name: "Roberth Hogarth",
      gender: "Male",
      serviceTitle: "AIPM USA Board Chairman",
      place: "Las Vegas, USA",

      imageUrl: bobImage,
      action: "Read More",

      ethiopianStaff: false,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 9,
      name: "David Mai",
      gender: "Male",
      serviceTitle: "AIPM USA Vice Board Chairman",
      place: "Portland, Oregon, USA",

      imageUrl: maiImage,
      action: "Read More",

      ethiopianStaff: false,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 10,
      name: "Justin Slemp",
      gender: "Male",
      serviceTitle: "AIPM USA Board Member",
      place: "Portland, Oregon, USA",

      imageUrl: justinImage,
      action: "Read More",

      ethiopianStaff: false,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 11,
      name: "Jeff Stetten",
      gender: "Male",
      serviceTitle: "AIPM Board Member Secretary Treasure",
      place: "Las vegas, USA",

      imageUrl: jeffImage,
      action: "Read More",

      ethiopianStaff: false,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 12,
      name: "Endashaw Areko",
      gender: "Male",
      serviceTitle: "AIPM USA Board Member",
      place: "Portland, Oregon, USA",

      imageUrl: endashawImage,
      action: "Read More",

      ethiopianStaff: false,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 13,
      name: "Larry Dombrow",
      gender: "Male",
      serviceTitle: "AIPM USA Board Member",
      place: "Las Vegas, USA",

      imageUrl: larryImage,
      action: "Read More",

      ethiopianStaff: false,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 14,
      name: "Dr. Bekele Shanko",
      gender: "Male",
      serviceTitle: "AIPM USA Board Member",
      place: "Las Vegas, USA",

      imageUrl: bekeleImage,
      action: "Read More",

      ethiopianStaff: false,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 15,
      name: "Steve Gundy",
      gender: "Male",
      serviceTitle: "AIPM USA Staff - Administration Newsletter and Prayer",
      place: "Las Vegas, USA",

      imageUrl: seteveImage,
      action: "Read More",

      ethiopianStaff: false,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 16,
      name: "Nancy Mcmillan",
      gender: "Female",
      serviceTitle: "AIPM USA Staff - Administration Giving and Support",
      place: "Las Vegas, USA",

      imageUrl: nancyImage,
      action: "Read More",

      ethiopianStaff: false,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 17,
      name: "Hollie Mendenhall",
      gender: "Female",
      serviceTitle:
        "AIPM USA - Board Member Webmaster/ Social Media Coordinator",
      place: "Las Vegas, USA",

      imageUrl: hollieImage,
      action: "Read More",

      ethiopianStaff: false,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
    {
      id: 18,
      name: "Eyosias Desta Langena",
      gender: "Male",
      serviceTitle: "AIPM Ethiopia Tech Team Leader",
      place: "Addis Ababa, Ethiopia",

      imageUrl: eyosiasImage,
      action: "Read More",

      ethiopianStaff: true,

      whoIsHe: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      responsibility: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,

      passion: `Ambaricho International Prayer and Mission Movement USA (AIPM USA), is a partner with Ambaricho International Prayer and Mission Movement 
              (AIPM in Ethiopia, a dynamic grassroots movement of prayer and missions outreach centered in Southern Ethiopia.  AIPM USA is directed by a Board 
              of  Directors which function as an Incorporated Not for Profit Corporation in the United States, registered in the state of Indiana.`,
    },
  ];

  const fetchStaffMember = async () => {
    setIsLoading(true);
    const res = await getStaffMember(id);
    setIsLoading(false);
    const item = items.filter((item) => {
      return item.id == id;
    });
    dispatch(getStaffMemberAction(item[0]));
  };
  useEffect(() => {
    fetchStaffMember();
  }, []);

  return (
    <div className={classes.root}>
      {isLoading ? (
        <div className={classes.circularProgress}>
          <CircularProgress />
        </div>
      ) : (
        <>
          {memberState.id ? (
            <>
              <Grid container className={classes.profileContainer}>
                <Grid item xs={12} sm={6}>
                  <img src={memberState.imageUrl} />
                </Grid>
                <Grid item>
                  <Grid
                    container
                    direction="column"
                    className={classes.profileText}
                    spacing={4}
                  >
                    <Grid item>
                      <Typography variant="h6">
                        {memberState.serviceTitle}
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h3"> {memberState.name} </Typography>
                    </Grid>
                    <Grid item>
                      <Typography variant="h6">
                        {memberState.ethiopianStaff ? "Ethiopian" : "USA"} AIPM
                        Staff Member
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
              <div className={classes.detailContainer}>
                <div className={classes.minDetailContainer}>
                  <Typography variant="h6" className={classes.titles}>
                    Who is {memberState.name}
                  </Typography>
                  <Typography variant="body2">{memberState.whoIsHe}</Typography>
                </div>
                <div className={classes.minDetailContainer}>
                  <Typography variant="h6" className={classes.titles}>
                    AIPM Responsibility
                  </Typography>
                  <Typography variant="body2">
                    {memberState.responsibility}
                  </Typography>
                </div>
                <div className={classes.minDetailContainer}>
                  <Typography variant="h6" className={classes.titles}>
                    {memberState.gender === "Male" ? "His" : "Her"} Passion
                  </Typography>
                  <Typography variant="body2">{memberState.passion}</Typography>
                </div>
                <div>
                  <Button variant="contained" onClick={handleBackClick}>Back</Button>
                </div>
              </div>
            </>
          ) : (
            <Typography variant="h6" className={classes.notFoundUser}>
              User is not found
            </Typography>
          )}
        </>
      )}
    </div>
  );
};

export default StaffMemberDetail;
