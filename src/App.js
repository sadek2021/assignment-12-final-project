import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Login from './Pages/Login/Login';
import NotFound from './Pages/NotFound/NotFound';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Register from './Pages/Register/Register';
import DetailOrder from './Pages/DetailOrder/DetailOrder';
import Products from './Pages/Products/Products';
import Reviews from './Pages/Reviews/Reviews';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';


function App() {
  return (
    <div>
      <AuthProvider>
        <BrowserRouter>

          {/* <Header></Header> */}
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

            <Route exact path="/products">
              <Products></Products>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="/register">
              <Register></Register>
            </Route>

            <PrivateRoute path="/orders/:orderId">
              <DetailOrder></DetailOrder>
            </PrivateRoute>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          {/* <Footer></Footer> */}

        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
