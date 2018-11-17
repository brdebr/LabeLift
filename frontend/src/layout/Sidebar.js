import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  withStyles,
  Drawer,
  AppBar,
  List,
  CssBaseline,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import NavbarTop from './NavbarTop';

const drawerWidth = 240;

const styles = theme => ({
  container: {
    padding: '10px 30px',
  },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
  },
});

class Sidebar extends React.Component {
  state = {
    open: false,
  };

  handleDrawerToggle = () => {
    this.setState({ open: !this.state.open });
  };

  render() {
    const { classes, theme } = this.props;

    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          position='fixed'
          className={classNames(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <NavbarTop toggleOpen={this.handleDrawerToggle} />
        </AppBar>
        <Drawer
          variant='permanent'
          className={classNames(classes.drawer, {
            [classes.drawerOpen]: this.state.open,
            [classes.drawerClose]: !this.state.open,
          })}
          classes={{
            paper: classNames({
              [classes.drawerOpen]: this.state.open,
              [classes.drawerClose]: !this.state.open,
            }),
          }}
          open={this.state.open}
        >
          
          <List style={{paddingTop:70}}>
            {['Clients', 'Products', 'Delivery notes', 'Invoices'].map(
              (text, index) => (
                <ListItem button key={text}>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItem>
              )
            )}
          </List>
          <Divider />
          <List>
            {['All mail', 'Trash', 'Spam'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.toolbar} />
          <Paper className={classes.container}>
            <Typography variant='h6' style={{ marginTop: 25 }}>
              Technologies
            </Typography>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell>Description</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Node.js</TableCell>
                  <TableCell>Runtime environment</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Express</TableCell>
                  <TableCell>Minimalistic WebFramework</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Sequelize</TableCell>
                  <TableCell>SQL ORM</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>React</TableCell>
                  <TableCell>Frontend Framework</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Material UI</TableCell>
                  <TableCell>React Theme</TableCell>
                </TableRow>
              </TableBody>
            </Table>
            <Typography variant='h6' style={{ marginTop: 25 }}>
              Routes
            </Typography>
            <Table style={{ marginBottom: 25 }}>
              <TableHead>
                <TableRow>
                  <TableCell>Action</TableCell>
                  <TableCell>Route</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>Signup</TableCell>
                  <TableCell>
                    https://labelift-dev.herokuapp.com/api/auth/signup
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Login</TableCell>
                  <TableCell>
                    https://labelift-dev.herokuapp.com/api/auth/login
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Get current users list</TableCell>
                  <TableCell>
                    https://labelift-dev.herokuapp.com/api/current
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Get current token info and user</TableCell>
                  <TableCell>
                    https://labelift-dev.herokuapp.com/api/users
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Paper>
        </main>
      </div>
    );
  }
}

Sidebar.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(Sidebar);
