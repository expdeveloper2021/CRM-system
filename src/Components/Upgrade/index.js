import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import BusinessIcon from '@material-ui/icons/Business';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import StarIcon from '@material-ui/icons/Star';
import CreateIcon from '@material-ui/icons/Create';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import './index.css'

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
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
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
    },
    root2: {
        width: '100%',
        maxWidth: 360,
    },
    nested: {
        paddingLeft: theme.spacing(4),
    },
    card: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
}));

function Upgrade(props) {
    const { container } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);

    function handleClick() {
        setOpen(!open);
    }

    function handleClick2() {
        setOpen2(!open2);
    }

    function handleClick3() {
        setOpen3(!open3);
    }

    function handleDrawerToggle() {
        setMobileOpen(!mobileOpen);
    }

    const drawer = (
        <div>
            <div />
            <List>
                <ListItem button style={{ letterSpacing: 20, textAlign: "center", color: "turquoise" }}>
                    <ListItemText primary={"F U T U R E   T R A D E S"} />
                </ListItem>
            </List>
            <Divider />
            <List
                component="nav"
                aria-labelledby="nested-list-subheader"
                className={classes.root2}
            >
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dashboard" onClick={() => props.history.push("/MemberPanel")} />
                </ListItem>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <AccountBoxIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Account" />
                </ListItem>
                <Divider />
                <ListItem button onClick={handleClick}>
                    <ListItemIcon>
                        <BusinessIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Business" />
                    {open ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Tree" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="My Direct Member" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="My All Down Line" />
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <StarIcon />
                    </ListItemIcon>
                    <ListItemText primary="Upgrade" onClick={() => props.history.push("/Upgrade")} />
                </ListItem>
                <Divider />
                <ListItem button onClick={handleClick2}>
                    <ListItemIcon>
                        <FileCopyIcon />
                    </ListItemIcon>
                    <ListItemText primary="Reports" />
                    {open2 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open2} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Binary Income" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Direct Income" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Withdrawal History" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Upgrade History" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Coin Payment History" />
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <CreateIcon />
                    </ListItemIcon>
                    <ListItemText primary="Referral Program" />
                </ListItem>
                <Divider />
                <ListItem button onClick={handleClick3}>
                    <ListItemIcon>
                        <ContactSupportIcon />
                    </ListItemIcon>
                    <ListItemText primary="Support Center" />
                    {open3 ? <ExpandLess /> : <ExpandMore />}
                </ListItem>
                <Collapse in={open3} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Create Ticket" />
                        </ListItem>
                        <ListItem button className={classes.nested}>
                            <ListItemIcon>
                                <ChevronRightIcon />
                            </ListItemIcon>
                            <ListItemText primary="Ticket List" />
                        </ListItem>
                    </List>
                </Collapse>
                <Divider />
                <ListItem button>
                    <ListItemIcon>
                        <ExitToAppIcon />
                    </ListItemIcon>
                    <ListItemText primary="Logout" />
                </ListItem>
                <Divider />
            </List>
        </div>
    );

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
                    <Typography variant="h6" noWrap>
                        User Name
                    </Typography>
                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
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
                            keepMounted: true, // Better open performance on mobile.
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
            <main className={classes.content}>
                <div className={classes.toolbar} />
                <div className="informative-content">
                    <StarIcon style={{ fill: "black" }} />
                    <span style={{ marginLeft: 10 }}>Upgrade</span>
                </div>
                <div className="main-content-upgrade">
                    <div className="card-upgrade">
                        <div className="top-card-upgrade">
                            <p>Rs. 2400</p>
                        </div>
                        <div className="bottom-card-upgrade">
                            <p>ROI 1.25% per Day</p>
                            <p>ROI Days: 160 Days</p>
                            <p>Binary Capping: 4800 Weekly</p>
                            <p>Referral Income: 20%</p>
                            <p>Binary: 8% Matching ratio 1:1</p>
                        </div>
                        <div className="btn-card-upgrade">
                            <Button variant="contained">Default</Button>
                        </div>
                    </div>
                    <div className="card-upgrade">
                        <div className="top-card-upgrade">
                            <p>Rs. 6000</p>
                        </div>
                        <div className="bottom-card-upgrade">
                            <p>ROI 1.25% per Day</p>
                            <p>ROI Days: 160 Days</p>
                            <p>Binary Capping: 12,000 Weekly</p>
                            <p>Referral Income: 20%</p>
                            <p>Binary: 8% Matching ratio 1:1</p>
                        </div>
                        <div className="btn-card-upgrade">
                            <Button variant="contained">Default</Button>
                        </div>
                    </div>
                    <div className="card-upgrade">
                        <div className="top-card-upgrade">
                            <p>Rs. 10,000</p>
                        </div>
                        <div className="bottom-card-upgrade">
                            <p>ROI 1.25% per Day</p>
                            <p>ROI Days: 160 Days</p>
                            <p>Binary Capping: 20,000 Weekly</p>
                            <p>Referral Income: 20%</p>
                            <p>Binary: 8% Matching ratio 1:1</p>
                        </div>
                        <div className="btn-card-upgrade">
                            <Button variant="contained">Default</Button>
                        </div>
                    </div>
                    <div className="card-upgrade">
                        <div className="top-card-upgrade">
                            <p>Rs. 16,000</p>
                        </div>
                        <div className="bottom-card-upgrade">
                            <p>ROI 1.25% per Day</p>
                            <p>ROI Days: 160 Days</p>
                            <p>Binary Capping: 32,000 Weekly</p>
                            <p>Referral Income: 20%</p>
                            <p>Binary: 8% Matching ratio 1:1</p>
                        </div>
                        <div className="btn-card-upgrade">
                            <Button variant="contained">Default</Button>
                        </div>
                    </div>
                    <div className="card-upgrade">
                        <div className="top-card-upgrade">
                            <p>Rs. 20,000</p>
                        </div>
                        <div className="bottom-card-upgrade">
                            <p>ROI 1.25% per Day</p>
                            <p>ROI Days: 160 Days</p>
                            <p>Binary Capping: 40,000 Weekly</p>
                            <p>Referral Income: 20%</p>
                            <p>Binary: 8% Matching ratio 1:1</p>
                        </div>
                        <div className="btn-card-upgrade">
                            <Button variant="contained">Default</Button>
                        </div>
                    </div>
                    <div className="card-upgrade">
                        <div className="top-card-upgrade">
                            <p>Rs. 30,000</p>
                        </div>
                        <div className="bottom-card-upgrade">
                            <p>ROI 1.25% per Day</p>
                            <p>ROI Days: 160 Days</p>
                            <p>Binary Capping: 60,000 Weekly</p>
                            <p>Referral Income: 20%</p>
                            <p>Binary: 8% Matching ratio 1:1</p>
                        </div>
                        <div className="btn-card-upgrade">
                            <Button variant="contained">Default</Button>
                        </div>
                    </div>
                    <div className="card-upgrade">
                        <div className="top-card-upgrade">
                            <p>Rs. 50,000</p>
                        </div>
                        <div className="bottom-card-upgrade">
                            <p>ROI 1.25% per Day</p>
                            <p>ROI Days: 160 Days</p>
                            <p>Binary Capping: 1 Lakh Weekly</p>
                            <p>Referral Income: 20%</p>
                            <p>Binary: 8% Matching ratio 1:1</p>
                        </div>
                        <div className="btn-card-upgrade">
                            <Button variant="contained">Default</Button>
                        </div>
                    </div>
                    <div className="card-upgrade">
                        <div className="top-card-upgrade">
                            <p>Rs. 100,000</p>
                        </div>
                        <div className="bottom-card-upgrade">
                            <p>ROI 1.25% per Day</p>
                            <p>ROI Days: 160 Days</p>
                            <p>Binary Capping: 2 Lakh Weekly</p>
                            <p>Referral Income: 20%</p>
                            <p>Binary: 8% Matching ratio 1:1</p>
                        </div>
                        <div className="btn-card-upgrade">
                            <Button variant="contained">Default</Button>
                        </div>
                    </div>
                    <div className="card-upgrade">
                        <div className="top-card-upgrade">
                            <p>Rs. 200,000</p>
                        </div>
                        <div className="bottom-card-upgrade">
                            <p>ROI 1.25% per Day</p>
                            <p>ROI Days: 160 Days</p>
                            <p>Binary Capping: 4 Lakh Weekly</p>
                            <p>Referral Income: 20%</p>
                            <p>Binary: 8% Matching ratio 1:1</p>
                        </div>
                        <div className="btn-card-upgrade">
                            <Button variant="contained">Default</Button>
                        </div>
                    </div>
                    <div className="card-upgrade">
                        <div className="top-card-upgrade">
                            <p>Rs. 500,000</p>
                        </div>
                        <div className="bottom-card-upgrade">
                            <p>ROI 1.25% per Day</p>
                            <p>ROI Days: 160 Days</p>
                            <p>Binary Capping: 10 Lakh Weekly</p>
                            <p>Referral Income: 20%</p>
                            <p>Binary: 8% Matching ratio 1:1</p>
                        </div>
                        <div className="btn-card-upgrade">
                            <Button variant="contained">Default</Button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

Upgrade.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    container: PropTypes.instanceOf(typeof Element === 'undefined' ? Object : Element),
};

export default Upgrade;
