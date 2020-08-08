import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Logo } from "images";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "11px 30px",
    backgroundColor: "#091f34",
  },
  logo: {
    maxWidth: 100,
  },
  left: {
    display: "flex",
    alignItems: "center",
  },
  link: {
    display: "inline-flex",
  },
  menu: {
    color: theme.palette.common.white,
    marginRight: 20,
  },
}));

const Header = ({ toggleSideBar }) => {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <div className={classes.left}>
        <IconButton className={classes.menu} onClick={toggleSideBar}>
          <MenuIcon />
        </IconButton>
        <Link to="/" className={classes.link}>
          <img src={Logo} alt="Logo" className={classes.logo} />
        </Link>
      </div>
    </header>
  );
};

Header.propTypes = {
  toggleSideBar: PropTypes.func,
};

export default Header;
