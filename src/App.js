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
import TourDetails from './Pages/TourDetails/TourDetails';
import AddBooking from './Pages/Admin/AddBooking/AddBooking';

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
          <PrivateRoute exact path="/tours">
            <Tours/>
          </PrivateRoute>
          <PrivateRoute exact path="/tours/tourDetails/:id">
            <TourDetails/>
          </PrivateRoute>
          <PrivateRoute exact path="/booking/addbooking">
            <AddBooking/>
          </PrivateRoute>
          <Route exact path="/login">
            <Login/>
          </Route>
          <Route exact path="/register">
            <Register/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </AuthProvider>
  );
}

export default App;
