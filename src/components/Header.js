import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  IconButton,
  Drawer,
  Link,
  MenuItem,
} from "@material-ui/core"
import MenuIcon from "@material-ui/icons/Menu"
import HomeIcon from '@material-ui/icons/Home'
import AccountCircleIcon from '@material-ui/icons/AccountCircle'
import AccountTreeIcon from '@material-ui/icons/AccountTree'
import InsertCommentIcon from '@material-ui/icons/InsertComment'
import PeopleIcon from '@material-ui/icons/People'
import WorkIcon from '@material-ui/icons/Work'
import FeedbackIcon from '@material-ui/icons/Feedback'
import ContactMailIcon from '@material-ui/icons/ContactMail'
import ExitToAppIcon from '@material-ui/icons/ExitToApp'
import React, { useState, useEffect } from "react"
import { Link as RouterLink } from "react-router-dom"
import {useTranslation} from "react-i18next"
/*
import {useTranslation} from "react-i18next"
const [t, i18n] = useTranslation('common')
{t('headers.agendas')}

*/

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#07575B",
    paddingRight: "3px",
    paddingLeft: "3px",
    "@media (max-width: 900px)": {
      paddingLeft: 0,
    },
  },
  logo: {
    fontFamily: "Work Sans, sans-serif",
    fontWeight: 600,
    color: "#66A5AD",
    textAlign: "left",
  },
  menuButton: {
    fontFamily: "Open Sans, sans-serif",
    fontWeight: 700,
    size: "15px",
    marginLeft: "2px",
    color:"#C4DFE6",
  },
  toolbar: {
    display: "flex",
    justifyContent: "space-between",
  },
  drawerContainer: {
    padding: "10px 10px",
  },
}));

export default function Header() {
  // eslint-disable-next-line
  const [t, i18n] = useTranslation('common')
  const { header, logo, menuButton, toolbar, drawerContainer } = useStyles();

  const [state, setState] = useState({
    mobileView: false,
    drawerOpen: false,
  });

  const { mobileView, drawerOpen } = state;
  const headersData = [
    {
      label: t('menu.home'),
      href: "/",
      icon: <HomeIcon />
    },
    {
      label: t('menu.organs'),
      href: "/organs",
      icon: <AccountTreeIcon />
    },
    {
      label: t('menu.sections'),
      href: "/sections",
      icon: <WorkIcon />
    },
    {
      label: t('menu.meetings'),
      href: "/meetings",
      icon: <PeopleIcon />
    },
    {
      label: t('menu.comments'),
      href: "/factcomments",
      icon: <InsertCommentIcon />
    },
    {
      label: t('menu.initiatives'),
      href: "/initiatives",
      icon: <FeedbackIcon />
    },
    {
      label: t('menu.contact'),
      href: "/info",
      icon: <ContactMailIcon />
    },
    {
      label: t('menu.account'),
      href: "/account",
      icon: <AccountCircleIcon />
    },
    {
      label: t('menu.logout'),
      href: "/logout",
      icon: <ExitToAppIcon />
    },
  ];
  
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobileView: true }))
        : setState((prevState) => ({ ...prevState, mobileView: false }));
    };

    setResponsiveness();

    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  const displayDesktop = () => {
    return (
      <Toolbar className={toolbar}>
        {DaaSLogo}
        <div>{getMenuButtons()}</div>
      </Toolbar>
    );
  };

  const displayMobile = () => {
    const handleDrawerOpen = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: true }));
    const handleDrawerClose = () =>
      setState((prevState) => ({ ...prevState, drawerOpen: false }));

    return (
      <Toolbar>
        <IconButton
          {...{
            edge: "start",
            color: "inherit",
            "aria-label": "menu",
            "aria-haspopup": "true",
            onClick: handleDrawerOpen,
          }}
        >
          <MenuIcon />
        </IconButton>

        <Drawer
          {...{
            anchor: "left",
            open: drawerOpen,
            onClose: handleDrawerClose,
          }}
        >
          <div className={drawerContainer}>{getDrawerChoices()}</div>
        </Drawer>

        <div>{DaaSLogo}</div>
        <div style={{position: 'absolute', right: '10px',}  }><IconButton
          {...{
            color: "inherit",
            to: '/logout',
            component: RouterLink,
            className: menuButton,
            size: "small"
          }}
        >
          <ExitToAppIcon />
        </IconButton></div>
      </Toolbar>
    );
  };

  const getDrawerChoices = () => {
    return headersData.map(({ label, href, icon }) => {
      return (
        <Link
          {...{
            component: RouterLink,
            to: href,
            color: "inherit",
            style: { textDecoration: "none" },
            key: label,
          }}
        >
          <MenuItem>{label}</MenuItem>
        </Link>
      );
    });
  };

  const DaaSLogo = (
    <Typography variant="h6" component="h1" className={logo}>
      {t('menu.logo')}
    </Typography>
  );

  const getMenuButtons = () => {
    return headersData.map(({ label, href, icon }) => {
      return (
        <IconButton
          {...{
            key: label,
            color: "inherit",
            to: href,
            component: RouterLink,
            className: menuButton,
            size: "small"
          }}
        >
          {icon}
          <div>{label}</div>
        </IconButton>
      );
    });
  };

  return (
    <header>
      <AppBar className={header}>
        {mobileView ? displayMobile() : displayDesktop()}
      </AppBar>
    </header>
  );
}