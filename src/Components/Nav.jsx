import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Link } from 'react-router-dom';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit">
              <Link to="/">Home</Link>
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit">
              <Link to="/about">About</Link>
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit">
              <Link to="/runners">Runners</Link>
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit">
              <Link to="/zombies">Zombies</Link>
            </Button>
          </Typography>
          <Typography variant="h6" className={classes.title}>
            <Button color="inherit">
              <Link to="/faqs">FAQS</Link>
            </Button>
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}
