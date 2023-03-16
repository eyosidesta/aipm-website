import React, { useEffect, useState } from "react";
import { loadCSS } from "fg-loadcss";
import {
  Grid,
  Typography,
  makeStyles,
  Icon,
  ClickAwayListener,
  Grow,
  Paper,
  Popper,
  MenuItem,
  MenuList,
} from "@material-ui/core";
import { BACKGROUND_COLOR } from "../../utils/constants/colors";
import { DEEP_BLUE_COLOR } from "../../utils/constants/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
    cursor: "pointer",
  },
  cursorPointer: {
    cursor: "pointer",
  },
  textColor: {
    color: "DEEP_BLUE_COLOR",
  },
  iconPos: {
    paddingLeft: "12%",
  },
}));
function GridAPI({ listItem, handleToggle }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const anchorRef = React.useRef(null);

  const toggleHandler = (event) => {
    handleToggle(listItem);
    setMenuOpen(!menuOpen);
    setAnchorEl(event.currentTarget);
    // setOpen((prevOpen) => !prevOpen)
  };
  const handleClose = () => {
    setMenuOpen(false);
  };
  const classes = useStyles();

  useEffect(() => {
    const node = loadCSS(
      "https://use.fontawesome.com/releases/v5.12.0/css/all.css",
      document.querySelector("#font-awesome-css")
    );

    return () => {
      node.parentNode.removeChild(node);
    };
  }, []);

  return (
    <>
      <Grid className={classes.root} onClick={toggleHandler} ref={anchorRef}>
        <Typography variant={listItem.variant} className={classes.textColor}>
          {listItem.text}
        </Typography>
        {listItem && listItem.menu && listItem.menu.length > 0 && (
          <Popper
            open={menuOpen}
            anchorEl={anchorRef.current}
            role={undefined}
            transition
          >
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{
                  transformOrigin:
                    placement === "bottom" ? "center top" : "center bottom",
                }}
              >
                <Paper>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList
                      autoFocusItem={menuOpen}
                      id="menu-list-grow"
                      style={{
                        backgroundColor: `${BACKGROUND_COLOR}`,
                        minWidth: 160,
                      }}
                    >
                      {listItem.menu.map((e) => {
                        return (
                          <MenuItem key={e.name} onClick={e.onMenuClick}>
                            {e.name}
                          </MenuItem>
                        );
                      })}
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        )}
      </Grid>
      {listItem.menu && listItem.menu.length > 0 && (
        <Grid className={classes.cursorPointer}>
          {!menuOpen ? (
            <Icon
              fontSize={listItem.iconSize}
              onClick={toggleHandler}
              style={{
                paddingLeft: "2%",
                paddingTop: "10%",
                color: `${DEEP_BLUE_COLOR}`,
              }}
              className={listItem.defaultIcon}
            />
          ) : (
            <Icon
              fontSize={listItem.iconSize}
              onClick={toggleHandler}
              style={{
                paddingLeft: "2%",
                paddingTop: "10%",
                color: `${DEEP_BLUE_COLOR}`,
              }}
              className={listItem.newIcon}
            />
          )}
        </Grid>
      )}
    </>
  );
}

export default GridAPI;
