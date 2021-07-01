import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { NavLink } from 'react-router-dom';
import EmeraldMarineLogo from './EmeraldMarineLogo';

const drawerWidth = 300;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
        },
        backgroundColor: '#78787a'
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: '#78787a',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(5),
    },
    listItem: {
        color: '#78787a'
    },
    logo: {
        height: "5em",
        [theme.breakpoints.down("md")]: {
            height: "5em"
        },
        marginLeft: "2em", 
        marginBottom: "2em"
    },
    logoContainer: {
        alignItems: "center",
        "&:hover": {
            backgroundColor: "transparent"
        }
    },
    link: {
        color: '#fff',
        textDecoration: "none",
        fontWeight: 900,
        fontSize: "1.75em"
    }
}));

function ResponsiveDrawer(props) {
    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <div className={classes.toolbar} />
            <NavLink to="/" className={classes.logoContainer} onClick={() => setMobileOpen(false)}>
                <EmeraldMarineLogo className={classes.logo} />
            </NavLink>
            <Divider />
            <List>
                <ListItem button className={classes.listItem} onClick={() => setMobileOpen(false)}>
                    <NavLink className={classes.link} to='/'>Home</NavLink>
                </ListItem>
                <ListItem button className={classes.listItem} onClick={() => setMobileOpen(false)}>
                    <NavLink className={classes.link} to='/products'>Products</NavLink>
                </ListItem>
                <ListItem button className={classes.listItem} onClick={() => setMobileOpen(false)}>
                    <NavLink className={classes.link} to='/news'>News</NavLink>
                </ListItem>
                <ListItem button className={classes.listItem} onClick={() => setMobileOpen(false)}>
                    <NavLink className={classes.link} to='/support'>Support</NavLink>
                </ListItem>
                <ListItem button className={classes.listItem} onClick={() => setMobileOpen(false)}>
                    <NavLink className={classes.link} to='/cart'>Cart</NavLink>
                </ListItem>

            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <div className={classes.root}>
            <CssBaseline />
            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap></Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        ModalProps={{
                            keepMounted: true, 
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
           
        </div>
    );
}

export default ResponsiveDrawer;