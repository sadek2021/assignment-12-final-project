import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import AddNewPackage from './Pages/AddNewPackage/AddNewPackage';
import AllBooking from './Pages/AllBooking/AllBooking';
import Destinations from './Pages/Destinations/Destinations';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import MyBooking from './Pages/MyBooking/MyBooking';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import DetailBooking from './Pages/DetailBooking/DetailBooking';
// import DetailBooking from './Pages/DetailBooking/DetailBooking';
import Services from './Pages/Services/Services';

function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>

          <Header></Header>
          <Switch>

            <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/aboutUs">
              <AboutUs></AboutUs>
            </Route>

            <PrivateRoute exact path="/services">
              <Services></Services>
            </PrivateRoute>

            <PrivateRoute path="/destinations">
              <Destinations></Destinations>
            </PrivateRoute>

            <PrivateRoute path="/myBooking">
              <MyBooking></MyBooking>
            </PrivateRoute>

            <PrivateRoute path="/allBooking">
              <AllBooking></AllBooking>
            </PrivateRoute>

            <PrivateRoute path="/addNewPackage">
              <AddNewPackage></AddNewPackage>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/bookings/:bookingId">
              <DetailBooking></DetailBooking>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
