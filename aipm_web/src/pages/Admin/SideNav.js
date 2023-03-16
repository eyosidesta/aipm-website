import React from "react";
import { Grid, TableContainer, Table, TableBody, Paper } from "@material-ui/core"
import SideNavTableContent from "../../components/Admin/SideNav/SideNavTableContent";

const SideNav = () => {
    const items = [
        {
          id: 1,
          title: "Dashboard",
          url: "/",
          onClick: () => {
            // console.log("dashboard ", 1),
          }
        },
        {
          id: 2,
          title: "Add Admin",
          url: "/add-admin",
          onClick: () => {
            // console.log("admin ", 2),
          }
        },
        {
          id: 3,
          title: "Testimony",
          url: "/testimony",
          onClick: () => {
            // console.log("testimony ", 3),
          }
        },
        {
          id: 4,
          title: "News",
          url: "/news",
          onClick: () => {
            // console.log("news ", 4),
          },
        },
        {
          id: 5,
          title: "University Students",
          url: "/university-students",
          onClick: () => {
            // console.log("university students ", 5)
          },
        },
        // {
        //   id: 6,
        //   title: "AIPM Projects",
        //   url: "/aipm-projects",
        //   onClick: () => console.log("wow kasu onclick ", 6),
        // },
        {
          id: 7,
          title: "AIPM Staffs",
          url: "/aipm-staffs",
          onClick: () => console.log("wow kasu onclick ", 7),
        },
        // {
        //   id: 8,
        //   title: "AIPM Missionaries",
        //   url: "/aipm-missionaries",
        //   onClick: () => console.log("wow kasu onclick ", 8),
        // },
        // {
        //   id: 9,
        //   title: "AIPM Supporters",
        //   url: "/aipm-supporters",
        //   onClick: () => console.log("wow kasu onclick ", 9),
        // },
        {
          id: 10,
          title: "My Profile",
          url: "/my-profile",
          onClick: () => {
            // console.log("my-profile ", 10),
          }
        },
      ];
    return (
        <Grid item xs={12} sm={12} md={3}>
          <TableContainer component={Paper}>
            <Table>
              <TableBody>
                {items.map((item, index) => {
                  return <SideNavTableContent key={index} data={item} />;
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
    )
}
export default SideNav;