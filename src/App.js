import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import AboutUs from './Pages/AboutUs/AboutUs';
import Footer from './Pages/Footer/Footer';
import Header from './Pages/Header/Header';
import Home from './Pages/Home/Home';
import Tours from './Pages/Tours/Tours';

function App() {
  return (
    <>
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
          <Route exact path="/tours">
            <Tours/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
