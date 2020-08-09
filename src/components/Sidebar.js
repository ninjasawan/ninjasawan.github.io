import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import HistoryIcon from "@material-ui/icons/History";
import TimelineIcon from "@material-ui/icons/Timeline";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const useStyles = makeStyles((theme) => ({
  sidebarContainer: {
    backgroundColor: "#091f34",
    height: "100%",
  },
  item: {
    padding: 0,
  },
  sidebarNav: {
    padding: 0,
  },
  icon: {
    color: "rgba(255, 255, 255, .7)",
    transition: "all .2s linear",
  },
  itemLink: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    padding: "16px 16px 16px 30px",
    borderLeft: "3px solid transparent",
    textDecoration: "none",
    color: "rgba(255, 255, 255, .7)",
    transition: "all .2s linear",
    "&:hover": {
      backgroundColor: "#1b2a46",
      color: theme.palette.common.white,
      "& svg": {
        color: theme.palette.common.white,
      },
    },
  },
  selected: {
    backgroundColor: "#1b2a46",
    borderColor: theme.palette.common.white,
    color: theme.palette.common.white,
    "& svg": {
      color: theme.palette.common.white,
    },
  },
  itemText: {
    margin: 0,
  },
  listIcon: {
    minWidth: 40,
  },
}));

const Sidebar = () => {
  const classes = useStyles();

  return (
    <aside className={classes.sidebarContainer}>
      <List component="nav" className={classes.sidebarNav}>
        <ListItem className={classes.item}>
          <NavLink
            exact
            to="/"
            activeClassName={classes.selected}
            className={classes.itemLink}
          >
            <ListItemIcon className={classes.listIcon}>
              <HistoryIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary="Historical Records"
              className={classes.itemText}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.item}>
          <NavLink
            exact
            to="/historical"
            activeClassName={classes.selected}
            className={classes.itemLink}
          >
            <ListItemIcon className={classes.listIcon}>
              <TrendingUpIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText
              primary="Historical HOLC Chart"
              className={classes.itemText}
            />
          </NavLink>
        </ListItem>
        <ListItem className={classes.item}>
          <NavLink
            exact
            to="/explore"
            activeClassName={classes.selected}
            className={classes.itemLink}
          >
            <ListItemIcon className={classes.listIcon}>
              <TimelineIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary="Live Chart" className={classes.itemText} />
          </NavLink>
        </ListItem>
      </List>
    </aside>
  );
};

export default Sidebar;
