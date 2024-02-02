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
          }
        },
        {
          id: 2,
          title: "Add Admin",
          url: "/add-admin",
          onClick: () => {
          }
        },
        {
          id: 3,
          title: "Testimony",
          url: "/testimony",
          onClick: () => {
          }
        },
        {
          id: 4,
          title: "News",
          url: "/news",
          onClick: () => {
          },
        },
        {
          id: 5,
          title: "University Students",
          url: "/university-students",
          onClick: () => {
          },
        },
        {
          id: 7,
          title: "AIPM Staffs",
          url: "/aipm-staffs",
          onClick: () => console.log("wow kasu onclick ", 7),
        },
        {
          id: 10,
          title: "My Profile",
          url: "/my-profile",
          onClick: () => {
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