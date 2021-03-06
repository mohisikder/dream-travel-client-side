import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AuthProvider from './Context/AuthProvider';
import Register from './Pages/Login/Register';
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Tours from './Pages/Tours/Tours';
import PrivateRoute from './Private/PrivateRoute';
import Login from './Pages/Login/Login';
import AddService from './Pages/Admin/AddService/AddService';
import MyBooking from './Pages/User/MyBooking';
import ManageBooking from './Pages/Admin/ManageBooking/ManageBooking';
import NotFound from './Pages/NotFound/NotFound';
import Booking from './Pages/Booking/Booking';
import Faq from './Pages/Faq/Faq';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
          <Route exact path="/about">
            <AboutUs/>
          </Route>
          <Route exact path="/faq">
            <Faq/>
          </Route>
          <PrivateRoute exact path="/addservice">
            <AddService/>
          </PrivateRoute>
          <PrivateRoute exact path="/booking">
            <Booking/>
          </PrivateRoute>
          <PrivateRoute exact path="/mybooking">
            <MyBooking/>
          </PrivateRoute>
          <PrivateRoute exact path="/managebooking">
            <ManageBooking/>
          </PrivateRoute>
          <Route exact path="/tours">
            <Tours/>
          </Route>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
          <Route path="*">
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
