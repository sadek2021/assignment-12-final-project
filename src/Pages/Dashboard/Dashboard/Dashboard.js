import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import PaymentsIcon from '@mui/icons-material/Payments';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import logo1 from '../../../Images/favicon/logo.png';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Link, useRouteMatch, Switch, Route } from 'react-router-dom';
import DashboardHome from '../DashboardHome/DashboardHome';
import AddProduct from '../AddProduct/AddProduct';
import useAuth from '../../../Hooks/useAuth/useAuth';
import ManageProducts from '../ManageProducts/ManageProducts';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';
import Review from '../Review/Review';
import Pay from '../Pay/Pay';
import MyOrders from '../MyOrders/MyOrders';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import Footer from '../../Footer/Footer';
import MakeAdmin from '../MakeAdmin/MakeAdmin';

const drawerWidth = 240;

function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    const { allContext } = useAuth();
    const { admin, logout, ColorButton, user } = allContext;

    let { path, url } = useRouteMatch();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar>
                <Link className="navbar-brand ms-4" to="/#">
                    <img src={logo1} alt="" />
                </Link> 
            </Toolbar>
            <Divider />
            <Toolbar />
            <List>
                <Link style={{ textDecoration: 'none', color:'black' }} to="/">
                    <ListItem button>
                        <ListItemIcon sx={{ color: '#DC3545' }}>
                            <HomeIcon />
                        </ListItemIcon>
                        <ListItemText>
                            Home
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}`}>
                    <ListItem button>
                        <ListItemIcon sx={{ color: '#DC3545' }}>
                            <DashboardIcon />
                        </ListItemIcon>
                        <ListItemText >
                            Dashboard
                        </ListItemText>
                    </ListItem>
                </Link>
                <Link style={{ textDecoration: 'none', color: 'black' }} to="/products">
                    <ListItem button>
                        <ListItemIcon sx={{ color: '#DC3545' }}>
                            <AddShoppingCartIcon />
                        </ListItemIcon>
                        <ListItemText >
                            Products
                        </ListItemText>
                    </ListItem>
                </Link>
                {!admin ? <Box>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/myOrders`}>
                        <ListItem button>
                            <ListItemIcon sx={{ color: '#DC3545' }}>
                                <ShoppingCartIcon />
                            </ListItemIcon>
                            <ListItemText >
                                My Orders
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/pay`}>
                        <ListItem button>
                            <ListItemIcon sx={{ color: '#DC3545' }}>
                                <PaymentsIcon />
                            </ListItemIcon>
                            <ListItemText >
                                Pay
                            </ListItemText>
                        </ListItem>
                    </Link>
                    <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/review`}>
                        <ListItem button>
                            <ListItemIcon sx={{ color: '#DC3545' }}>
                                <ReviewsIcon />
                            </ListItemIcon>
                            <ListItemText >
                                Review
                            </ListItemText>
                        </ListItem>
                    </Link>
                </Box>
                    :
                    <Box>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageAllOrders`}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: '#DC3545' }}>
                                    <SettingsApplicationsIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    Manage All Orders
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/manageProducts`}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: '#DC3545' }}>
                                    <SettingsIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    Manage Products
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/addProduct`}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: '#DC3545' }}>
                                    <AddCircleIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    Add Product
                                </ListItemText>
                            </ListItem>
                        </Link>
                        <Link style={{ textDecoration: 'none', color: 'black' }} to={`${url}/makeAdmin`}>
                            <ListItem button>
                                <ListItemIcon sx={{ color: '#DC3545'}}>
                                    <AdminPanelSettingsIcon />
                                </ListItemIcon>
                                <ListItemText >
                                    Make Admin
                                </ListItemText>
                            </ListItem>
                        </Link>
                    </Box>}
                <Toolbar />
                <Toolbar />
                <Toolbar />
                <Toolbar />
                <Box sx={{ textAlign: 'center' }}>
                    <ListItem>
                        <ListItemIcon sx={{ color: '#DC3545' }}>
                            <AccountCircleIcon />
                        </ListItemIcon>
                        <ListItemText>
                            <h5 className="my-4 text-color">
                                {user.displayName}</h5>
                        </ListItemText>
                    </ListItem>  
                        <button style={{ width: '90%' }} onClick={logout} className="btn btn-outline-danger">
                        Logout
                        </button>
                </Box>
            </List>
        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` }, backgroundColor: '#DC3545', color: 'white'
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        DASHBOARD
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 0, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <Route path={`${path}/pay`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                </Switch>
                <Footer></Footer>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
