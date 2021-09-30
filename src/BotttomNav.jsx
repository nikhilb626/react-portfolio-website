import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import {ThemeProvider} from "@material-ui/core/styles";
import theme from "./theme";
import HomeIcon from '@material-ui/icons/Home';
import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';
import GitHubIcon from '@material-ui/icons/GitHub';
import PermContactCalendarIcon from '@material-ui/icons/PermContactCalendar';
import BuildOutlinedIcon from '@material-ui/icons/BuildOutlined';
import {Link} from "react-router-dom";


const useStyles = makeStyles({
  root: {
    // background: 'linear-gradient(178deg,#0b635e 0%, #109455 80%)',
    background: 'linear-gradient(178deg,#bbdefb 0%, #2196f3 80%)',

    position:"fixed",
    bottom:0,
    left:0,
    right:0,
   zIndex:100,
  },
});

function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  return (
      <ThemeProvider theme={theme}>

    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    //   showLabels
      className={classes.root}
    >
      <BottomNavigationAction component={Link} exact to="/" label="Home" icon={<HomeIcon />} />
      <BottomNavigationAction component={Link} to="/portfolio" label="Portfolio" icon={<AssignmentOutlinedIcon />} />
      {/* <BottomNavigationAction component={Link} to="/services" label="Services" icon={<BuildOutlinedIcon />} /> */}
      <BottomNavigationAction component={Link} to="/github" label="Github" icon={<GitHubIcon />} />
      <BottomNavigationAction component={Link} to="/contact" label="Contact" icon={<PermContactCalendarIcon />} />
    </BottomNavigation>
    </ThemeProvider>
  );
}


export default BottomNav;