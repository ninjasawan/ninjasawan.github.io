import React, { useCallback, useState, useEffect } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { Sidebar, Header } from "components";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    flexDirection: "column",
    backgroundColor: "#dcdfce",
  },
  header: {
    flex: "0 0 70px",
    width: "100%",
  },
  mainContent: {
    flex: "0 0 calc(100vh - 70px)",
    overflow: "hidden",
    display: "flex",
    width: "100%",
  },
  sidebar: {
    flex: "0 0 300px",
  },
  content: {
    flex: 1,
    padding: 30,
    overflow: "auto",
  },
}));

const AppContainer = ({ children }) => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("xs"));
  const [isOpenSideBar, setIsOpenSideBar] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    if (matches) setIsOpenSideBar(false);
    else setIsOpenSideBar(true);
  }, [matches]);

  const toggleSideBar = useCallback(
    () => setIsOpenSideBar((prevState) => !prevState),
    []
  );

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <Header toggleSideBar={toggleSideBar} />
      </div>
      <div className={classes.mainContent}>
        {isOpenSideBar && (
          <div className={classes.sidebar}>
            <Sidebar />
          </div>
        )}

        <div className={classes.content}>{children}</div>
      </div>
    </div>
  );
};

export default AppContainer;
